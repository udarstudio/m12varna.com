<script setup>
const appConfig = useAppConfig();
const seoTitle = `Климатизация и ремонти във Варна | ${appConfig.siteName}`;
const seoDescription =
  'Монтаж и профилактика на климатици, ремонти на бани и кухни, дограма и вътрешни довършителни работи във Варна. Над 10 години опит. Обадете се за оглед и оферта.';

useHead({
  title: seoTitle,
  meta: [
    { name: 'description', content: seoDescription },
    { property: 'og:title', content: seoTitle },
    { property: 'og:description', content: seoDescription },
    { name: 'twitter:title', content: seoTitle },
    { name: 'twitter:description', content: seoDescription },
  ],
});
</script>

<template>
  <div class="bg-white text-slate-900 min-h-screen overflow-x-hidden">
    <div class="bg-slate-50">
      <Header />
      <NuxtPage />
      <Footer />
    </div>
  </div>
</template>
