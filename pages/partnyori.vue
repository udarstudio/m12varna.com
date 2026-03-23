<script setup>
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/solid';

const appConfig = useAppConfig();
const siteConfig = useSiteConfig();
const { createSchemaGraph, ids, localBusiness, website } = useStructuredData();
const siteUrl = siteConfig.url || 'https://remonti-varna.bg';
const seoTitle = `Партньори и приятели | ${appConfig.siteName}`;
const seoDescription =
  'Разгледайте партньорите на Мани 12 ЕООД във Варна - доверени компании и специалисти, с които работим по проекти за климатизация, вентилация и ремонти.';
const partnersUrl = `${siteUrl}/partnyori`;
const partnerPage = {
  '@type': 'WebPage',
  '@id': ids.partnersPage,
  url: partnersUrl,
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

const partners = [
  {
    name: 'Счетоводна кантора "МИ-24"',
    description:
      'Счетоводна кантора "МИ-24" предлага счетоводни услуги, данъчни и кредитни консултации, както и професионално обслужване на фирми и физически лица.',
    website: 'https://www.facebook.com/mi24eood/',
    logo: '/partnyori/schetovodna-kantora-mi-24.png',
  },
  {
    name: 'СК "Чудните скали"',
    description:
      'СК "Чудните скали" обединява хора с различни умения, възможности и интереси, за които приоритет са заниманията сред природата.',
    website: 'https://chudniteskali.com',
    logo: '/partnyori/sk-chudnite-skali.png',
  },
  {
    name: '"Автоматика Делис" ЕООД',
    description:
      '"Автоматика Делис" ЕООД е специализирана компания в Стара Загора за гаражни и индустриални врати, известна с представителството си на Hörmann.',
    website: 'https://delice.bg/за-нас/',
    logo: '/partnyori/delice.png',
  },
  {
    name: '"Екеле" ЕООД',
    description:
      'Екеле ЕООД е наш партньор с опит в решения, свързани с врати и входни системи, с когото работим с доверие и добро професионално отношение.',
    logo: '/partnyori/ekele.png',
  },
];

const partnersItemList = {
  '@type': 'ItemList',
  '@id': `${partnersUrl}#partners-list`,
  name: 'Партньори и приятели на Мани 12 ЕООД',
  itemListElement: partners.map((partner, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Organization',
      name: partner.name,
      description: partner.description,
      ...(partner.website ? { url: partner.website } : {}),
      ...(partner.logo
        ? {
            logo: {
              '@type': 'ImageObject',
              url: `${siteUrl}${partner.logo}`,
            },
          }
        : {}),
    },
  })),
};

const partnersSchema = createSchemaGraph([website, localBusiness, partnerPage, partnersItemList]);

useHead({
  title: seoTitle,
  link: [{ rel: 'canonical', href: partnersUrl }],
  meta: [
    { name: 'description', content: seoDescription },
    { property: 'og:url', content: partnersUrl },
    { property: 'og:title', content: seoTitle },
    { property: 'og:description', content: seoDescription },
    { name: 'twitter:title', content: seoTitle },
    { name: 'twitter:description', content: seoDescription },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(partnersSchema),
    },
  ],
});
</script>

<template>
  <main class="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-16 text-gray-700">
    <section class="flex flex-col gap-4">
      <h1 class="text-3xl font-semibold leading-tight text-slate-900 md:text-5xl">
        Партньори и приятели
      </h1>
      <p class="max-w-3xl text-lg">
        През годините сме имали щастието да работим с хора и фирми, на които можем да разчитаме. Тук
        споделяме част от партньорите и приятелите, с които сме работили заедно и с които
        продължаваме да поддържаме добри отношения.
      </p>
    </section>

    <section v-if="partners.length" class="grid gap-5 md:grid-cols-2">
      <article
        v-for="partner in partners"
        :key="partner.name"
        class="flex h-full flex-col gap-5 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"
      >
        <div class="flex items-center gap-4">
          <div
            class="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white"
          >
            <img
              v-if="partner.logo"
              :src="partner.logo"
              :alt="`Лого на ${partner.name}`"
              width="110"
              height="110"
              class="h-full w-full object-contain p-1.5"
            />
            <span v-else class="text-lg font-semibold text-slate-400">
              {{ partner.name.slice(0, 2).toUpperCase() }}
            </span>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-slate-900">{{ partner.name }}</h3>
            <a
              v-if="partner.website"
              :href="partner.website"
              target="_blank"
              rel="nofollow noopener noreferrer"
              class="mt-3 inline-flex w-fit items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700 hover:text-white"
            >
              Към сайта
              <ArrowTopRightOnSquareIcon class="h-3 w-3" />
            </a>
          </div>
        </div>

        <p class="text-sm leading-6">{{ partner.description }}</p>
      </article>
    </section>
  </main>
</template>
