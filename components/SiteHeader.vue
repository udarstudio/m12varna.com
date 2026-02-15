<template>
  <header>
    <div class="w-full bg-black">
      <div class="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-2 text-xs text-white">
        <span></span>
        <div class="flex items-center gap-5">
          <a class="flex items-center gap-1 font-semibold tracking-wide hover:text-white/80" href="tel:+359877424100">
            <PhoneIcon class="h-3 w-3" />
            0877 424 100
          </a>
          <a class="flex items-center gap-1 font-semibold tracking-wide hover:text-white/80" href="mailto:mani12ltd@gmail.com">
            <EnvelopeIcon class="h-3 w-3" />
            mani12ltd@gmail.com
          </a>
        </div>
      </div>
    </div>

    <nav class="w-full border-b border-slate-200 bg-slate-200/80">
      <div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 text-sm text-slate-700">
        <img
          class="w-auto"
          width="64"
          height="61"
          :src="logoUrl"
          alt="M12 Varna"
          style="width: 64px; height: auto"
        />
        <ul class="flex items-center gap-6">
          <li>
            <a class="transition hover:text-slate-900" href="#">За нас</a>
          </li>
          <li>
            <a class="transition hover:text-slate-900" href="#">Дейности</a>
          </li>
          <li>
            <a class="transition hover:text-slate-900" href="#">Галерия</a>
          </li>
          <li>
            <a class="transition hover:text-slate-900" href="#">Партньори</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/solid'
import logoUrl from '~/assets/images/mani-12-eood-logo.png'
</script>
