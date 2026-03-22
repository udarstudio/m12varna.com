<template>
  <footer class="mt-12 border-t border-black bg-black">
    <div class="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-8">
      <div class="grid gap-8 text-sm text-gray-200 md:grid-cols-3">
        <div class="flex flex-col gap-3">
          <NuxtLink to="/" aria-label="Начало" class="flex w-fit items-center gap-3">
            <img width="48" height="46" :src="logoUrl" alt="M12 Varna" class="h-11 w-auto" />
            <span class="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
              {{ appConfig.siteName }}
            </span>
          </NuxtLink>
          <p>Климатизация и ремонтни услуги във Варна.</p>
        </div>

        <div class="flex flex-col gap-3">
          <span class="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400"
            >Контакти</span
          >
          <a
            class="flex w-fit items-center gap-2 transition hover:text-white"
            :href="`tel:${appConfig.phoneNumberRaw}`"
          >
            <PhoneIcon class="h-4 w-4" />
            {{ appConfig.phoneNumber }}
          </a>
          <a
            class="flex w-fit items-center gap-2 transition hover:text-white"
            :href="`mailto:${appConfig.email}`"
          >
            <EnvelopeIcon class="h-4 w-4" />
            {{ appConfig.email }}
          </a>
        </div>

        <div class="flex flex-col gap-3">
          <span class="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400"
            >Навигация</span
          >
          <NuxtLink
            v-for="item in navItems"
            :key="item.href"
            class="w-fit transition hover:text-white"
            :to="item.href"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
      </div>

      <div class="flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-gray-400">
        <span>© 2026 {{ appConfig.siteName }}. Всички права запазени.</span>
        <span>Официален изпълнител: Мани 12 ЕООД</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/solid';
import logoUrl from '~/assets/images/mani-12-eood-logo.png';

const appConfig = useAppConfig();
const { navItems } = useNavigation();
</script>
