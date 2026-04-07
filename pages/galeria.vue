<script setup lang="ts">
import 'photoswipe/style.css';
import PhotoSwipeLightbox from 'photoswipe/lightbox';

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

const categories: GalleryCategory[] = [
  { id: 'all', label: 'Всички' },
  { id: 'klimatizatsia', label: 'Климатизация' },
  { id: 'remonti', label: 'Ремонти' },
  { id: 'ventilatsia', label: 'Вентилация' },
];

const galleryImages: GalleryImage[] = [
  {
    id: 'ac-apartment',
    categoryId: 'klimatizatsia',
    alt: 'Илюстративна визия за монтаж на климатик в жилищен интериор.',
    caption: 'Монтаж в апартамент',
    thumbSrc: '/galeria/thumbs/klima-apartment.svg',
    fullSrc: '/galeria/full/klima-apartment.svg',
    width: 1600,
    height: 1200,
  },
  {
    id: 'ac-office',
    categoryId: 'klimatizatsia',
    alt: 'Илюстративна визия за климатизация в работно пространство.',
    caption: 'Климатизация за офис',
    thumbSrc: '/galeria/thumbs/klima-office.svg',
    fullSrc: '/galeria/full/klima-office.svg',
    width: 1600,
    height: 1200,
  },
  {
    id: 'renovation-bathroom',
    categoryId: 'remonti',
    alt: 'Илюстративна визия за обновяване на баня с прецизни довършителни работи.',
    caption: 'Обновяване на баня',
    thumbSrc: '/galeria/thumbs/remont-bathroom.svg',
    fullSrc: '/galeria/full/remont-bathroom.svg',
    width: 1600,
    height: 1200,
  },
  {
    id: 'renovation-kitchen',
    categoryId: 'remonti',
    alt: 'Илюстративна визия за довършителни работи и монтаж в кухня.',
    caption: 'Довършителни работи в кухня',
    thumbSrc: '/galeria/thumbs/remont-kitchen.svg',
    fullSrc: '/galeria/full/remont-kitchen.svg',
    width: 1600,
    height: 1200,
  },
  {
    id: 'ventilation-restaurant',
    categoryId: 'ventilatsia',
    alt: 'Илюстративна визия за вентилационна система в търговски обект.',
    caption: 'Вентилация за търговски обект',
    thumbSrc: '/galeria/thumbs/vent-restaurant.svg',
    fullSrc: '/galeria/full/vent-restaurant.svg',
    width: 1600,
    height: 1200,
  },
  {
    id: 'ventilation-home',
    categoryId: 'ventilatsia',
    alt: 'Илюстративна визия за домашна вентилация и въздуховоди.',
    caption: 'Домашна вентилация',
    thumbSrc: '/galeria/thumbs/vent-home.svg',
    fullSrc: '/galeria/full/vent-home.svg',
    width: 1600,
    height: 1200,
  },
];

const imageList = {
  '@type': 'ItemList',
  '@id': `${galleryUrl}#gallery-items`,
  name: 'Галерия на Мани 12 ЕООД',
  itemListElement: galleryImages.map((image, index) => ({
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
};

const gallerySchema = createSchemaGraph([website, localBusiness, galleryPage, imageList]);

useHead({
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
      innerHTML: JSON.stringify(gallerySchema),
    },
  ],
});

const activeTab = ref(categories[0]?.id ?? '');
const galleryRef = ref<HTMLElement | null>(null);
const currentCategory = computed(() =>
  categories.find((category) => category.id === activeTab.value) ?? categories[0],
);
const visibleImages = computed(() =>
  activeTab.value === 'all'
    ? galleryImages
    : galleryImages.filter((image) => image.categoryId === activeTab.value),
);

let lightbox: PhotoSwipeLightbox | null = null;

onMounted(() => {
  if (!galleryRef.value) {
    return;
  }

  lightbox = new PhotoSwipeLightbox({
    gallery: galleryRef.value,
    children: 'a[data-pswp-width]',
    pswpModule: () => import('photoswipe'),
    showHideAnimationType: 'zoom',
    bgOpacity: 0.92,
  });

  lightbox.init();
});

onBeforeUnmount(() => {
  lightbox?.destroy();
  lightbox = null;
});
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

    <section
      class="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm md:p-6"
      aria-labelledby="gallery-tabs-title"
    >
      <div class="flex flex-col gap-4">
        <div
          class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
          id="gallery-tabs-title"
        >
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
              Изберете категория
            </p>
            <h2 class="mt-2 text-2xl font-semibold text-slate-900">
              {{ currentCategory?.label }}
            </h2>
          </div>
          <p class="max-w-xl text-sm leading-6 text-gray-500">
            Табовете сменят снимките динамично, а при клик се отваря детайлен преглед на цял екран.
          </p>
        </div>

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
      </div>
    </section>

    <section
      ref="galleryRef"
      class="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      :aria-label="`Снимки в категория ${currentCategory?.label}`"
    >
      <article
        v-for="image in visibleImages"
        :key="image.id"
        class="group overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
      >
        <a
          :href="image.fullSrc"
          :data-pswp-width="image.width"
          :data-pswp-height="image.height"
          :data-cropped="true"
          :aria-label="`Отвори ${image.caption || image.alt} на цял екран`"
          class="block focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-4"
        >
          <figure class="relative overflow-hidden bg-slate-100">
            <img
              :src="image.thumbSrc"
              :alt="image.alt"
              width="800"
              height="600"
              class="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent"
            ></div>
            <span class="gallery-note absolute bottom-4 left-4 text-3xl text-white">
              Това го можем
            </span>
          </figure>
        </a>

        <div class="flex items-center justify-between gap-3 p-5">
          <div>
            <h3 class="text-lg font-semibold text-slate-900">
              {{ image.caption || currentCategory?.label }}
            </h3>
            <p class="mt-1 text-sm leading-6 text-gray-500">{{ image.alt }}</p>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<style scoped>
.gallery-note {
  font-family: 'Brush Script MT', 'Segoe Print', 'Lucida Handwriting', cursive;
  line-height: 1;
  text-shadow:
    0 3px 18px rgba(15, 23, 42, 0.38),
    0 1px 2px rgba(15, 23, 42, 0.45);
  transform: rotate(-6deg);
}
</style>
