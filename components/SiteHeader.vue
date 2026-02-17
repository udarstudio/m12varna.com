<template>
  <header class="site-header bg-gray-200/80">
    <div class="flex justify-between items-center mx-auto max-w-5xl">
      <a href="/" aria-label="Начало" class="relative z-10 bg-black p-2">
        <img class="site-header__logo" width="64" height="61" :src="logoUrl" alt="M12 Varna" />
      </a>

      <div>
        <div class="px-6 flex items-center justify-between text-xs text-white">
          <span> </span>

          <div
            class="relative site-header__bar w-full flex justify-end items-center gap-5 bg-black"
          >
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

            <ul class="flex items-center text-gray-300">
              <li class="flex items-center">
                <a class="px-2 py-2 text-gray-700 transition hover:text-gray-900" href="#"
                  >За нас</a
                >
              </li>

              <li class="flex items-center">
                <span class="mx-4 inline-block h-7 w-px bg-gray-300/60" aria-hidden="true"></span>
                <a class="px-2 py-2 text-gray-700 transition hover:text-gray-900" href="#"
                  >Дейности</a
                >
              </li>

              <li class="flex items-center">
                <span class="mx-4 inline-block h-7 w-px bg-gray-300/60" aria-hidden="true"></span>
                <a class="px-2 py-2 text-gray-700 transition hover:text-gray-900" href="#"
                  >Галерия</a
                >
              </li>

              <li class="flex items-center">
                <span class="mx-4 inline-block h-7 w-px bg-gray-300/60" aria-hidden="true"></span>
                <a class="px-2 py-2 text-gray-700 transition hover:text-gray-900" href="#"
                  >Партньори</a
                >
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/solid';
import logoUrl from '~/assets/images/mani-12-eood-logo.png';
</script>

<style scoped lang="scss">
@use '~/assets/scss/site-header.scss';
</style>
