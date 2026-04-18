<script setup lang="ts">
import 'photoswipe/style.css';

type GalleryCategory = {
  id: string;
  label: string;
};

type GalleryImage = {
  id: string;
  categoryId: string;
  alt: string;
  caption?: string;
  thumbSrc: string;
  fullSrc: string;
  width: number;
  height: number;
};

type PhotoSwipeItem = {
  src: string;
  msrc: string;
  width: number;
  height: number;
  alt: string;
};

const appConfig = useAppConfig();
const siteConfig = useSiteConfig();
const { createSchemaGraph, ids, localBusiness, website } = useStructuredData();
const siteUrl = siteConfig.url || 'https://remonti-varna.bg';
const seoTitle = `Галерия | ${appConfig.siteName}`;
const seoDescription =
  'Разгледайте избрани проекти на Мани 12 ЕООД във Варна - климатизация, ремонти и вентилация с удобна галерия и преглед на снимките на цял екран.';
const galleryUrl = `${siteUrl}/galeria`;
const galleryPage = {
  '@type': 'CollectionPage',
  '@id': `${galleryUrl}#webpage`,
  url: galleryUrl,
  name: seoTitle,
  description: seoDescription,
  isPartOf: {
    '@id': ids.website,
  },
  about: {
    '@id': ids.organization,
  },
  inLanguage: 'bg',
};

const { data: galleryData } = await useFetch<{
  categories: GalleryCategory[];
  images: GalleryImage[];
}>('/api/gallery');

const categories = computed(() => galleryData.value?.categories ?? []);
const galleryImages = computed(() => galleryData.value?.images ?? []);
const imageList = computed(() => ({
  '@type': 'ItemList',
  '@id': `${galleryUrl}#gallery-items`,
  name: 'Галерия на Мани 12 ЕООД',
  itemListElement: galleryImages.value.map((image, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'ImageObject',
      name: image.caption || image.alt,
      contentUrl: `${siteUrl}${image.fullSrc}`,
      thumbnailUrl: `${siteUrl}${image.thumbSrc}`,
      caption: image.caption || image.alt,
      width: image.width,
      height: image.height,
    },
  })),
}));
const gallerySchema = computed(() =>
  createSchemaGraph([website, localBusiness, galleryPage, imageList.value]),
);

useHead(() => ({
  title: seoTitle,
  link: [{ rel: 'canonical', href: galleryUrl }],
  meta: [
    { name: 'description', content: seoDescription },
    { property: 'og:url', content: galleryUrl },
    { property: 'og:title', content: seoTitle },
    { property: 'og:description', content: seoDescription },
    { name: 'twitter:title', content: seoTitle },
    { name: 'twitter:description', content: seoDescription },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(gallerySchema.value),
    },
  ],
}));

const activeTab = ref('all');
const INITIAL_VISIBLE_COUNT = 48;
const LOAD_MORE_STEP = 24;
const visibleCount = ref(INITIAL_VISIBLE_COUNT);
const currentCategory = computed(() =>
  categories.value.find((category) => category.id === activeTab.value) ?? categories.value[0],
);
const filteredImages = computed(() =>
  activeTab.value === 'all'
    ? galleryImages.value
    : galleryImages.value.filter((image) => image.categoryId === activeTab.value),
);
const visibleImages = computed(() => filteredImages.value.slice(0, visibleCount.value));
const hasMoreImages = computed(() => visibleImages.value.length < filteredImages.value.length);
const photoSwipeItems = computed<PhotoSwipeItem[]>(() =>
  filteredImages.value.map((image) => ({
    src: image.fullSrc,
    msrc: image.thumbSrc,
    width: image.width,
    height: image.height,
    alt: image.alt,
  })),
);

watch(activeTab, () => {
  visibleCount.value = INITIAL_VISIBLE_COUNT;
});

function showMoreImages() {
  visibleCount.value += LOAD_MORE_STEP;
}

async function openLightbox(startIndex: number) {
  const { default: PhotoSwipe } = await import('photoswipe');
  const pswp = new PhotoSwipe({
    dataSource: photoSwipeItems.value,
    index: startIndex,
    showHideAnimationType: 'zoom',
    bgOpacity: 0.92,
  });

  pswp.on('uiRegister', () => {
    pswp.ui.registerElement({
      name: 'gallery-note',
      order: 9,
      isButton: false,
      appendTo: 'root',
      html: '<span class="pswp-gallery-note">Това го можем</span>',
    });
  });

  pswp.init();
}
</script>

<template>
  <main class="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-16 text-gray-700">
    <section class="flex flex-col gap-4">
      <h1 class="text-3xl font-semibold leading-tight text-slate-900 md:text-5xl">Галерия</h1>
      <p class="max-w-3xl text-lg">
        Подбрахме кратка галерия с проекти от климатизация, ремонтни дейности и вентилационни
        решения. Изберете категория, разгледайте снимките и отворете всяка визия на цял екран.
      </p>
    </section>

    <section>
      <div
        class="flex flex-wrap gap-3"
        role="tablist"
        aria-label="Категории в галерията"
      >
        <button
          v-for="category in categories"
          :key="category.id"
          :aria-selected="activeTab === category.id"
          :class="
            activeTab === category.id
              ? 'border-black bg-black text-white shadow-lg shadow-black/10'
              : 'border-gray-200 bg-white text-slate-700 hover:border-teal-500 hover:text-teal-700'
          "
          class="rounded-full border px-5 py-2.5 text-sm font-semibold transition"
          role="tab"
          type="button"
          @click="activeTab = category.id"
        >
          {{ category.label }}
        </button>
      </div>
    </section>

    <section class="grid gap-5 md:grid-cols-2 xl:grid-cols-3" :aria-label="`Снимки в категория ${currentCategory?.label}`">
      <article
        v-for="image in visibleImages"
        :key="image.id"
        class="group overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
      >
        <a
          :href="image.fullSrc"
          :aria-label="`Отвори ${image.caption || image.alt} на цял екран`"
          class="block focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-4"
          @click.prevent="openLightbox(filteredImages.findIndex((entry) => entry.id === image.id))"
        >
          <figure class="overflow-hidden bg-slate-100">
            <img
              :src="image.thumbSrc"
              :alt="image.alt"
              width="800"
              height="600"
              class="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </figure>
        </a>
      </article>
    </section>

    <div v-if="hasMoreImages" class="flex justify-center">
      <button
        class="rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-teal-500 hover:text-teal-700"
        type="button"
        @click="showMoreImages"
      >
        Покажи още
      </button>
    </div>
  </main>
</template>

<style scoped>
:global(.pswp-gallery-note) {
  position: absolute;
  bottom: clamp(1.5rem, 4vw, 3rem);
  left: clamp(1.5rem, 5vw, 4rem);
  z-index: 1;
  font-family: 'Brush Script MT', 'Segoe Print', 'Lucida Handwriting', cursive;
  font-size: clamp(2.25rem, 6vw, 5.5rem);
  line-height: 1;
  color: #fff;
  text-shadow:
    0 6px 28px rgba(15, 23, 42, 0.55),
    0 2px 6px rgba(15, 23, 42, 0.7);
  transform: rotate(-6deg);
  pointer-events: none;
}
</style>
