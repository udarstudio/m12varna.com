<script setup>
import { PhoneIcon } from '@heroicons/vue/24/solid';

const appConfig = useAppConfig();
const seoTitle = `Климатизация и ремонти във Варна | ${appConfig.siteName}`;
const seoDescription =
  'Монтаж и профилактика на климатици, ремонти на бани и кухни, дограма и вътрешни довършителни работи във Варна. Над 10 години опит. Обадете се за оглед и оферта.';

useHead({
  title: seoTitle,
  meta: [
    {
      name: 'description',
      content: seoDescription,
    },
    {
      property: 'og:title',
      content: seoTitle,
    },
    {
      property: 'og:description',
      content: seoDescription,
    },
    {
      name: 'twitter:title',
      content: seoTitle,
    },
    {
      name: 'twitter:description',
      content: seoDescription,
    },
  ],
});
</script>

<template>
  <main class="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-16">
    <div class="flex flex-col gap-4">
      <h1 class="text-3xl md:text-5xl font-semibold leading-tight">
        Климатизация и ремонти във Варна
      </h1>

      <h2 class="max-w-2xl text-gray-600">
        <strong>{{ appConfig.siteName }}</strong> е утвърдена компания във Варна с над 10 години
        опит в монтажа и обслужването на климатични системи, както и в цялостни и частични ремонти
        на жилища и търговски обекти.
      </h2>
    </div>

    <div class="space-y-4 text-base text-gray-700">
      <h2 class="text-xl font-semibold text-gray-800">За нас</h2>
      <p>
        През годините сме реализирали десетки успешно завършени проекти, като залагаме на качество,
        коректност и прецизност във всяка стъпка от работния процес.
      </p>
      <p class="font-semibold text-gray-800">Специализирани сме в:</p>
      <ul class="list-disc space-y-2 pl-5">
        <li>Монтаж, демонтаж и профилактика на климатици</li>
        <li>Консултация и избор на подходяща климатична система</li>
        <li>Ремонт на бани и кухни</li>
        <li>Цялостни ремонти на апартаменти</li>
        <li>Монтаж на PVC и алуминиева дограма</li>
        <li>Довършителни и вътрешни ремонтни дейности</li>
      </ul>
      <p>
        Работим организирано и отговорно, като спазваме договорените срокове и изисквания на
        клиента. Нашата мисия е да осигурим комфорт, енергийна ефективност и дълготрайни решения за
        всеки дом и офис във Варна.
      </p>
      <p>
        За нас доверието се гради с резултати – затова подхождаме към всеки проект с внимание към
        детайла и професионално отношение.
      </p>
    </div>

    <div class="flex justify-center">
      <a
        class="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700 hover:text-white"
        :href="`tel:${appConfig.phoneNumberRaw}`"
      >
        <PhoneIcon class="h-4 w-4" />
        Обадете ни се: {{ appConfig.phoneNumber }}
      </a>
    </div>
  </main>
</template>
