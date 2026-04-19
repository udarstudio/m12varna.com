<script setup lang="ts">
import { ArrowUpIcon } from '@heroicons/vue/24/solid';

const props = withDefaults(
  defineProps<{
    threshold?: number;
  }>(),
  {
    threshold: 640,
  }
);

const isVisible = ref(false);

function updateVisibility() {
  isVisible.value = window.scrollY > props.threshold;
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

onMounted(() => {
  updateVisibility();
  window.addEventListener('scroll', updateVisibility, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateVisibility);
});
</script>

<template>
  <button
    :class="
      isVisible
        ? 'translate-y-0 opacity-100'
        : 'pointer-events-none translate-y-4 opacity-0'
    "
    class="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-black px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition duration-300 hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 md:bottom-8 md:right-8"
    type="button"
    aria-label="Обратно в началото"
    @click="scrollToTop"
  >
    <ArrowUpIcon class="h-4 w-4" />
    <span class="hidden sm:inline">Нагоре</span>
  </button>
</template>
