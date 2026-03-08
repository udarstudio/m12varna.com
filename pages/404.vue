<script setup>
const appConfig = useAppConfig();
const siteConfig = useSiteConfig();

useHead({
  title: `Страницата не е намерена | ${appConfig.siteName}`,
  link: [{ rel: 'canonical', href: `${siteConfig.url}/404` }],
  meta: [
    {
      name: 'description',
      content: 'Търсената страница не съществува. Върнете се към началото или посетете страницата за контакти.',
    },
    {
      property: 'og:url',
      content: `${siteConfig.url}/404`,
    },
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
  ],
});
</script>

<template>
  <NotFoundContent />
</template>
