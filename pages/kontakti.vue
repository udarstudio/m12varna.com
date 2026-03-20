<script setup>
const appConfig = useAppConfig();
const siteConfig = useSiteConfig();
const { createSchemaGraph, ids, localBusiness, website } = useStructuredData();
const isSubmitting = ref(false);
const submitState = ref('idle');
const submitMessage = ref('');
const seoTitle = `Контакти | ${appConfig.siteName}`;
const seoDescription =
  'Свържете се с Мани 12 ЕООД за климатизация, вентилация и ремонтни дейности във Варна. Обадете се или изпратете запитване по имейл.';
const contactUrl = `${siteConfig.url}/kontakti`;
const addressLines = [
  `${appConfig.address.addressLocality}, България ${appConfig.address.postalCode}`,
  appConfig.address.streetAddress,
];
const mapsEmbedUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222.93830296520397!2d27.89604820686935!3d43.22248691133264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a455da64057e2d%3A0xb819e34b4c6c6363!2z0JzQsNC90LggMTIg0JXQntCe0JQg0JrQu9C40LzQsNGC0LjQt9Cw0YbQuNGPINC4INGA0LXQvNC-0L3RgtC4!5e1!3m2!1sen!2sbg!4v1774038462635!5m2!1sen!2sbg';
const mapsDirectionsUrl = 'https://maps.app.goo.gl/E7sqdUpHSQTiRC7F7';
const contactWebPage = {
  '@type': 'WebPage',
  '@id': ids.contactPage,
  url: contactUrl,
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
const contactPage = {
  '@type': 'ContactPage',
  '@id': `${contactUrl}#contact-page`,
  url: contactUrl,
  name: seoTitle,
  description: seoDescription,
  mainEntity: {
    '@id': ids.organization,
  },
  isPartOf: {
    '@id': ids.website,
  },
};
const contactSchema = createSchemaGraph([website, localBusiness, contactWebPage, contactPage]);

async function submitContactForm(event) {
  const form = event.target;
  const formData = new FormData(form);

  isSubmitting.value = true;
  submitState.value = 'idle';
  submitMessage.value = '';

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });
    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || 'Възникна проблем при изпращането.');
    }

    form.reset();
    submitState.value = 'success';
    submitMessage.value = 'Запитването беше изпратено успешно.';
  } catch (error) {
    submitState.value = 'error';
    submitMessage.value =
      error instanceof Error ? error.message : 'Възникна проблем при изпращането.';
  } finally {
    isSubmitting.value = false;
  }
}

useHead({
  title: seoTitle,
  link: [{ rel: 'canonical', href: contactUrl }],
  meta: [
    { name: 'description', content: seoDescription },
    { property: 'og:url', content: contactUrl },
    { property: 'og:title', content: seoTitle },
    { property: 'og:description', content: seoDescription },
    { name: 'twitter:title', content: seoTitle },
    { name: 'twitter:description', content: seoDescription },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(contactSchema),
    },
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
    <section class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div class="mb-6 flex flex-col gap-3">
        <h2 class="text-2xl font-semibold text-slate-900">Изпратете запитване</h2>
        <p class="max-w-3xl">
          Опишете накратко каква услуга ви е нужна и ще се свържем с вас възможно най-скоро.
        </p>
      </div>

      <form @submit.prevent="submitContactForm" class="grid gap-4">
        <input type="hidden" name="access_key" value="0c102ed8-2e4b-4188-9c44-41913c54234c" />

        <div class="grid gap-4 md:grid-cols-2">
          <label class="flex flex-col gap-2">
            <span class="text-sm font-semibold uppercase tracking-[0.12em] text-gray-500"
              >Име *</span
            >
            <input
              type="text"
              name="name"
              required
              class="rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-slate-900"
            />
          </label>

          <label class="flex flex-col gap-2">
            <span class="text-sm font-semibold uppercase tracking-[0.12em] text-gray-500"
              >Телефон *</span
            >
            <input
              type="tel"
              name="phone"
              required
              class="rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-slate-900"
            />
          </label>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <label class="flex flex-col gap-2">
            <span class="text-sm font-semibold uppercase tracking-[0.12em] text-gray-500"
              >Имейл *</span
            >
            <input
              type="email"
              name="email"
              required
              class="rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-slate-900"
            />
          </label>

          <label class="flex flex-col gap-2">
            <span class="text-sm font-semibold uppercase tracking-[0.12em] text-gray-500"
              >Услуга</span
            >
            <input
              type="text"
              name="subject"
              class="rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-slate-900"
            />
          </label>
        </div>

        <label class="flex flex-col gap-2">
          <span class="text-sm font-semibold uppercase tracking-[0.12em] text-gray-500"
            >Съобщение *</span
          >
          <textarea
            name="message"
            required
            rows="6"
            class="rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-slate-900"
          ></textarea>
        </label>

        <div class="flex items-center gap-4 max-md:flex-col max-md:items-start">
          <p
            v-if="submitMessage"
            class="text-base font-semibold"
            :class="submitState === 'success' ? 'text-teal-700' : 'text-red-600'"
          >
            {{ submitState === 'success' ? '✓ ' : '' }}{{ submitMessage }}
          </p>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="ml-auto inline-flex w-fit rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700 max-md:ml-0"
            :class="{ 'cursor-not-allowed opacity-70': isSubmitting }"
          >
            {{ isSubmitting ? 'Изпращане...' : 'Изпрати запитване' }}
          </button>
        </div>
      </form>
    </section>

    <section class="grid gap-6 rounded-3xl bg-slate-50 md:grid-cols-[1.3fr_0.9fr]">
      <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <iframe
          class="h-[420px] w-full"
          :src="mapsEmbedUrl"
          title="Карта до офиса на Мани 12 ЕООД"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div
        class="flex flex-col justify-between gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
      >
        <div class="flex flex-col gap-3">
          <h2 class="text-2xl font-semibold text-slate-900">Адрес</h2>
          <p v-for="line in addressLines" :key="line">{{ line }}</p>
          <p>
            Телефон:
            <a
              class="font-semibold text-slate-900 transition hover:text-teal-700"
              :href="`tel:${appConfig.phoneNumberRaw}`"
            >
              {{ appConfig.phoneNumber }}
            </a>
          </p>
          <p>
            Имейл:
            <a
              class="font-semibold text-slate-900 transition hover:text-teal-700"
              :href="`mailto:${appConfig.email}`"
            >
              {{ appConfig.email }}
            </a>
          </p>
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
