<template>
  <header class="site-header overflow-hidden bg-gray-200/80">
    <div class="relative mx-auto max-w-5xl">
      <a
        href="/"
        aria-label="Начало"
        class="site-header__logo relative z-10 flex items-center p-2 bg-black"
      >
        <img width="64" height="61" :src="logoUrl" alt="M12 Varna" />
      </a>

      <div class="px-6 flex items-center justify-between text-xs text-white">
        <span> </span>

        <div class="relative site-header__bar w-full flex justify-end items-center gap-5 bg-black">
          <a
            class="flex items-center p-2 gap-1 font-semibold tracking-wide hover:text-white/80"
            href="tel:+359877424100"
          >
            <PhoneIcon class="h-3 w-3" />
            0877 424 100
          </a>
          <a
            class="flex items-center p-2 gap-1 font-semibold tracking-wide hover:text-white/80"
            href="mailto:mani12ltd@gmail.com"
          >
            <EnvelopeIcon class="h-3 w-3" />
            mani12ltd@gmail.com
          </a>
        </div>
      </div>

      <nav class="w-full border-b border-gray-200">
        <div
          class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 text-sm text-gray-700"
        >
          <span> </span>

          <button
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-700 transition hover:text-gray-900 md:hidden"
            type="button"
            aria-label="Отвори меню"
            :aria-expanded="isMenuOpen"
            @click="isMenuOpen = !isMenuOpen"
          >
            <Bars3Icon v-if="!isMenuOpen" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </button>

          <ul class="hidden items-center text-gray-300 md:flex">
            <li v-for="(item, index) in navItems" :key="item.label" class="flex items-center">
              <span
                v-if="index !== 0"
                class="mx-4 inline-block h-7 w-px bg-gray-300/60"
                aria-hidden="true"
              ></span>
              <a class="px-2 py-2 text-gray-700 transition hover:text-gray-900" :href="item.href">
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>
        <div v-if="isMenuOpen" class="border-t border-gray-200 bg-white md:hidden">
          <ul class="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-4 text-sm text-gray-700">
            <li v-for="item in navItems" :key="item.label">
              <a
                class="block rounded-md px-3 py-2 transition hover:bg-gray-100"
                :href="item.href"
                @click="isMenuOpen = false"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { Bars3Icon, EnvelopeIcon, PhoneIcon, XMarkIcon } from '@heroicons/vue/24/solid';
import logoUrl from '~/assets/images/mani-12-eood-logo.png';

const isMenuOpen = ref(false);
const navItems = [
  { label: 'За нас', href: '#' },
  { label: 'Дейности', href: '#' },
  { label: 'Галерия', href: '#' },
  { label: 'Партньори', href: '#' },
];
</script>

<style scoped lang="scss">
@use '~/assets/scss/site-header.scss';
</style>
