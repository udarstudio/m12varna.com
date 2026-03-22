<script setup>
const appConfig = useAppConfig();
const siteConfig = useSiteConfig();
const { createSchemaGraph, ids, localBusiness, website } = useStructuredData();
const seoTitle = `Партньори и приятели | ${appConfig.siteName}`;
const seoDescription =
  'Научете повече за партньорствата на Мани 12 ЕООД във Варна и възможностите за съвместна работа по климатизация, вентилация и ремонтни проекти.';
const partnersUrl = `${siteConfig.url}/partnyori`;
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
const partnersSchema = createSchemaGraph([website, localBusiness, partnerPage]);

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

const partnerTypes = [
  'Строителни фирми и инвеститори',
  'Архитекти, проектанти и интериорни студиа',
  'Доставчици на климатична, вентилационна и строителна техника',
  'Екипи за довършителни, електро и ВиК дейности',
];

const partnerBenefits = [
  'Ясна комуникация, коректни срокове и отговорност във всеки етап на проекта',
  'Практически опит в климатизация, вентилация и строително-ремонтни дейности',
  'Гъвкавост при работа както по малки обекти, така и по цялостни проекти',
  'Фокус върху качественото изпълнение и дългосрочните професионални отношения',
];
</script>

<template>
  <main class="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-16 text-gray-700">
    <section class="flex flex-col gap-4">
      <h1 class="text-3xl font-semibold leading-tight text-slate-900 md:text-5xl">
        Партньори и приятели
      </h1>
      <p class="max-w-3xl text-lg">
        Работим с фирми, специалисти и доставчици, с които споделяме еднакви стандарти за
        качество, коректност и професионално отношение към всеки обект.
      </p>
    </section>

    <section class="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
      <article class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 class="text-2xl font-semibold text-slate-900">Заедно изпълняваме повече</h2>
        <div class="mt-4 space-y-4">
          <p>
            <strong>{{ appConfig.legalName }}</strong> участва в проекти, при които добрата
            координация между отделните екипи е ключова. Затова ценим устойчивите партньорства с
            компании и професионалисти, на които може да се разчита.
          </p>
          <p>
            От частни жилища и търговски обекти до по-широки строително-ремонтни задачи, подхождаме
            с ясна организация, качествено изпълнение и уважение към общата цел на проекта.
          </p>
        </div>
      </article>

      <article class="rounded-2xl border border-gray-200 bg-slate-50 p-6 shadow-sm">
        <h2 class="text-2xl font-semibold text-slate-900">Търсим сътрудничество с</h2>
        <ul class="mt-4 list-disc space-y-2 pl-5">
          <li v-for="item in partnerTypes" :key="item">{{ item }}</li>
        </ul>
      </article>
    </section>

    <section class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 class="text-2xl font-semibold text-slate-900">Какво предлагаме като партньор</h2>
      <div class="mt-5 grid gap-4 md:grid-cols-2">
        <div
          v-for="benefit in partnerBenefits"
          :key="benefit"
          class="rounded-2xl border border-gray-200 bg-slate-50 p-5"
        >
          <p>{{ benefit }}</p>
        </div>
      </div>
    </section>

    <section class="rounded-3xl bg-black px-6 py-8 text-white">
      <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div class="max-w-3xl space-y-3">
          <h2 class="text-2xl font-semibold">Имате идея за съвместна работа?</h2>
          <p class="text-sm text-gray-300 md:text-base">
            Ако търсите надежден изпълнител или партньор за проект във Варна и региона, свържете се
            с нас, за да обсъдим възможностите.
          </p>
        </div>

        <NuxtLink
          to="/kontakti"
          class="inline-flex w-fit rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-teal-100"
        >
          Свържете се с нас
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
