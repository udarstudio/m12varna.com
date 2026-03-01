<template>
  <footer class="mt-12 border-t border-gray-200 bg-white">
    <div class="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-6 text-xs text-gray-500">
      <span>© 2026 {{ appConfig.siteName }}. Всички права запазени.</span>
      <span>Официален изпълнител: Мани 12 ЕООД</span>
    </div>
  </footer>
</template>

<script setup>
const appConfig = useAppConfig();
</script>
