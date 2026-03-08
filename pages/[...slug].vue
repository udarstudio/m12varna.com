<script setup>
const appConfig = useAppConfig();

setResponseStatus(404);

useHead({
  title: `Страницата не е намерена | ${appConfig.siteName}`,
  meta: [
    {
      name: 'description',
      content: 'Търсената страница не съществува. Върнете се към началото или посетете страницата за контакти.',
    },
  ],
});
</script>

<template>
  <NotFoundContent />
</template>
