<script setup>
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/solid';

const appConfig = useAppConfig();
const siteConfig = useSiteConfig();
const seoTitle = `Контакти | ${appConfig.siteName}`;
const seoDescription =
  'Свържете се с Мани 12 ЕООД за климатизация, вентилация и ремонтни дейности във Варна. Обадете се или изпратете запитване по имейл.';
const addressLines = ['Варна, България 9009', 'ул. Тролейна 36, ет. 2'];
const mapsQuery = encodeURIComponent(addressLines.join(', '));
const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&z=16&output=embed`;
const mapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

useHead({
  title: seoTitle,
  link: [{ rel: 'canonical', href: `${siteConfig.url}/kontakti` }],
  meta: [
    { name: 'description', content: seoDescription },
    { property: 'og:url', content: `${siteConfig.url}/kontakti` },
    { property: 'og:title', content: seoTitle },
    { property: 'og:description', content: seoDescription },
    { name: 'twitter:title', content: seoTitle },
    { name: 'twitter:description', content: seoDescription },
  ],
});
</script>

<template>
  <main class="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-16 text-gray-700">
    <div class="flex flex-col gap-4">
      <h1 class="text-3xl font-semibold leading-tight text-slate-900 md:text-5xl">Контакти</h1>
      <p class="max-w-3xl text-lg">
        Свържете се с нас за оглед, консултация или оферта за климатизация, вентилация и
        строително-ремонтни дейности във Варна и региона.
      </p>
    </div>

    <div class="grid gap-4 md:grid-cols-2">
      <a
        class="flex rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-gray-300"
        :href="`tel:${appConfig.phoneNumberRaw}`"
      >
        <div class="flex items-start gap-4">
          <span
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-white"
          >
            <PhoneIcon class="h-5 w-5" />
          </span>
          <div class="flex flex-col gap-2">
            <span class="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500"
              >Телефон</span
            >
            <span class="text-2xl font-semibold text-slate-900">{{ appConfig.phoneNumber }}</span>
            <span>Позвънете за бърза връзка относно нов проект или текущ ремонт.</span>
          </div>
        </div>
      </a>

      <a
        class="flex rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-gray-300"
        :href="`mailto:${appConfig.email}`"
      >
        <div class="flex items-start gap-4">
          <span
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-white"
          >
            <EnvelopeIcon class="h-5 w-5" />
          </span>
          <div class="flex flex-col gap-2">
            <span class="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500"
              >Имейл</span
            >
            <span class="text-2xl font-semibold break-all text-slate-900">{{
              appConfig.email
            }}</span>
            <span
              >Изпратете описание на обекта или запитване и ще се свържем с вас възможно
              най-скоро.</span
            >
          </div>
        </div>
      </a>
    </div>

    <section class="grid gap-6 rounded-3xl bg-slate-50 md:grid-cols-[1.3fr_0.9fr]">
      <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <iframe
          class="h-[360px] w-full"
          :src="mapsEmbedUrl"
          title="Карта до офиса на Мани 12 ЕООД"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div class="flex flex-col justify-between gap-5 rounded-2xl bg-white p-6">
        <div class="flex flex-col gap-3">
          <h2 class="text-2xl font-semibold text-slate-900">Адрес</h2>
          <p v-for="line in addressLines" :key="line">{{ line }}</p>
          <p>
            Посетете ни на място или използвайте картата, за да отворите маршрута директно в Google
            Maps.
          </p>
        </div>

        <a
          class="inline-flex w-fit rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
          :href="mapsDirectionsUrl"
          target="_blank"
          rel="noreferrer nofollow"
        >
          Отвори в Google Maps
        </a>
      </div>
    </section>
  </main>
</template>
