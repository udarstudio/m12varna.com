<script setup>
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <header>
      <div class="w-full bg-black">
        <div class="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-2 text-xs text-white">
          <span class="uppercase tracking-[0.3em] text-white/70">Quick Access</span>
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
          <span class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">m12varna</span>
          <div class="flex items-center gap-6">
            <a class="transition hover:text-slate-900" href="#">Home</a>
            <a class="transition hover:text-slate-900" href="#">Work</a>
            <a class="transition hover:text-slate-900" href="#">Studio</a>
            <a class="transition hover:text-slate-900" href="#">Contact</a>
          </div>
        </div>
      </nav>
    </header>

    <main class="mx-auto flex max-w-5xl flex-col gap-10 px-6 pb-16 pt-8">
      <div class="flex flex-col gap-4">
        <p class="text-xs uppercase tracking-[0.3em] text-slate-500">m12varna</p>
        <h1 class="text-4xl font-semibold leading-tight sm:text-6xl">
          Nuxt 3 + Tailwind starter is live.
        </h1>
        <p class="max-w-2xl text-lg text-slate-600">
          Static-ready Nuxt setup with Tailwind wired in. Start building your site in
          <span class="font-medium text-slate-900">pages/index.vue</span>.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p class="text-sm font-semibold text-slate-800">Static preset</p>
          <p class="mt-2 text-sm text-slate-500">Runs with Nitro static output.</p>
        </div>
        <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p class="text-sm font-semibold text-slate-800">Tailwind ready</p>
          <p class="mt-2 text-sm text-slate-500">Utility-first styles included.</p>
        </div>
        <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p class="text-sm font-semibold text-slate-800">Nuxt 3</p>
          <p class="mt-2 text-sm text-slate-500">Modern Vue 3 framework.</p>
        </div>
      </div>

      <div class="flex flex-wrap gap-3">
        <span class="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500">/pages</span>
        <span class="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500">/assets</span>
        <span class="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500">/nuxt.config.ts</span>
      </div>
    </main>
  </div>
</template>
