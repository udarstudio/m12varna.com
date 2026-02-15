<template>
  <main class="mx-auto flex max-w-5xl flex-col gap-10 px-6 pb-16 pt-8">
    <div class="flex flex-col gap-4">
      <p class="text-xs uppercase tracking-[0.3em] text-slate-500">m12varna</p>
      <h1 class="text-4xl font-semibold leading-tight sm:text-6xl">
        Съвременен Nuxt 3 + Tailwind старт за вашия сайт.
      </h1>
      <p class="max-w-2xl text-lg text-slate-600">
        Статична Nuxt конфигурация с Tailwind. Започнете изграждането в
        <span class="font-medium text-slate-900">pages/index.vue</span>.
      </p>
    </div>

    <div class="grid gap-6 md:grid-cols-3">
      <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p class="text-sm font-semibold text-slate-800">Статичен режим</p>
        <p class="mt-2 text-sm text-slate-500">Работи с Nitro static output.</p>
      </div>
      <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p class="text-sm font-semibold text-slate-800">Tailwind готов</p>
        <p class="mt-2 text-sm text-slate-500">Включени utility-first стилове.</p>
      </div>
      <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p class="text-sm font-semibold text-slate-800">Nuxt 3</p>
        <p class="mt-2 text-sm text-slate-500">Модерният Vue 3 framework.</p>
      </div>
    </div>

    <div class="flex flex-wrap gap-3">
      <span class="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500">/pages</span>
      <span class="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500">/assets</span>
      <span class="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500">/nuxt.config.ts</span>
    </div>
  </main>
</template>
