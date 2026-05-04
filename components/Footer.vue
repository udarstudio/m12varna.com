<template>
  <footer class="mt-12 border-t border-black bg-black">
    <div class="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-8">
      <div class="grid gap-8 text-sm text-gray-200 md:grid-cols-3">
        <div class="flex flex-col gap-3">
          <NuxtLink to="/" aria-label="Начало" class="flex w-fit items-center gap-3">
            <img
              width="48"
              height="46"
              src="/mani-12-eood-logo.png"
              alt="M12 Varna"
              class="h-11 w-auto"
            />
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
            class="flex w-fit items-center gap-2 text-white transition hover:text-gray-300"
            :href="`tel:${appConfig.phoneNumberRaw}`"
          >
            <PhoneIcon class="h-4 w-4" />

            {{ appConfig.phoneNumber }}
          </a>
          <a
            class="flex w-fit items-center gap-2 text-white transition hover:text-gray-300"
            :href="`mailto:${appConfig.email}`"
          >
            <EnvelopeIcon class="h-4 w-4" />

            {{ appConfig.email }}
          </a>
          <a
            class="flex w-fit items-center gap-2 text-white transition hover:text-gray-300"
            href="https://www.facebook.com/profile.php?id=100069276856198"
            target="_blank"
            rel="nofollow"
          >
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path
                d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.77-1.63 1.56v1.9h2.77l-.44 2.91h-2.33V22C18.34 21.24 22 17.08 22 12.06Z"
              />
            </svg>

            Фирма "Мани 12"
          </a>
        </div>

        <div class="flex flex-col gap-3">
          <span class="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400"
            >Навигация</span
          >
          <NuxtLink
            v-for="item in navItems"
            :key="item.href"
            class="w-fit text-white transition hover:text-gray-300"
            exact-active-class="font-bold italic !text-gray-300"
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

const appConfig = useAppConfig();
const { navItems } = useNavigation();
</script>
