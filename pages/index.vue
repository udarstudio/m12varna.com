<script setup>
import { PhoneIcon } from '@heroicons/vue/24/solid';

const appConfig = useAppConfig();
const siteConfig = useSiteConfig();
const siteUrl = siteConfig.url || 'https://remonti-varna.bg';
const seoTitle = `Климатизация и ремонти във Варна | ${appConfig.siteName}`;
const seoDescription =
  'Монтаж и профилактика на климатици, ремонти на бани и кухни, дограма и вътрешни довършителни работи във Варна. Над 14 години опит. Обадете се за оглед и оферта.';

useHead({
  title: seoTitle,
  link: [{ rel: 'canonical', href: siteUrl }],
  meta: [
    {
      name: 'description',
      content: seoDescription,
    },
    {
      property: 'og:url',
      content: siteUrl,
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
  <main class="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-16 text-gray-700">
    <h1 class="text-3xl md:text-5xl font-semibold leading-tight">
      Климатизация и ремонти във Варна
    </h1>

    <h2 class="text-xl md:text-2xl">
      <strong>{{ appConfig.siteName }}</strong> - 14 години опит, доверие и професионализъм в
      сферата на климатизацията и ремонтните дейности във Варна.
    </h2>

    <p>
      Вашият надежден партньор в областта на климатизацията, вентилацията и строително-ремонтните
      дейности във Варна и региона. В отговор на динамичния пазар и нуждите на нашите клиенти, с
      времето разширихме дейността си. Днес предлагаме цялостно управление и изпълнение на проекти -
      от строително-ремонтни дейности, през вътрешно обзавеждане, до външни мазилки, изолации и
      довършителни работи за напълно завършена визия.
    </p>
    <p>
      Ние поемаме пълната отговорност за всеки етап от проекта, като гарантираме правилното
      функциониране на изградените системи и инсталации до окончателното завършване на обекта. С нас
      клиентите получават качество, сигурност и спокойствие - увереност, че са направили правилния
      избор и че инвестицията им е в надеждни ръце. Работим на територията на град Варна и близките
      населени места, като поемаме проекти в цялата страна по договорка.
    </p>

    <div>
      <p class="font-semibold mb-4">Специализирани сме в:</p>

      <ul class="list-disc space-y-2 pl-5">
        <li>
          <strong>Монтаж и сервиз на климатици във Варна</strong> - доставка, монтаж, профилактика и
          поддръжка на климатични системи за жилища и търговски обекти.
        </li>
        <li>
          <strong>Вентилационни системи</strong> - проектиране, изграждане и обслужване на
          вентилация за домове, офиси и обекти.
        </li>
        <li>
          <strong>Цялостни и частични ремонти</strong> - довършителни работи, изолации и външни
          подобрения.
        </li>
        <li>
          <strong>Електро и ВиК услуги</strong> - изграждане и ремонт на електро и водопроводни
          инсталации.
        </li>
        <li>
          <strong>Монтажи и логистика</strong> - монтаж на дограма и оборудване, транспорт на
          материали и извозване на отпадъци.
        </li>
      </ul>
    </div>

    <p>
      За нас доверието се гради на резултати, а успехът през годините се дължи на доволните ни
      клиенти. Затова подхождаме към всеки проект с внимание към детайла и професионално отношение.
    </p>

    <p>
      <strong><i>“Има ли желание - има и начин.”</i></strong
      ><br />
      Това е принципът, който следваме във всеки проект, за да удовлетворим Вашите изисквания.
    </p>

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
