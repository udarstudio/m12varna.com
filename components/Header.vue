<template>
	<header
		ref="headerElement"
		class="site-header"
		:class="{ 'site-header--menu-open': isMenuOpen }"
	>
		<div class="site-header__inner relative mx-auto max-w-5xl">
			<NuxtLink
				to="/"
				aria-label="Начало"
				class="site-header__logo relative z-10 flex items-center p-2 bg-black"
			>
				<img width="64" height="61" src="/mani-12-eood-logo.png" alt="M12 Varna" />
			</NuxtLink>

			<div
				class="relative site-header__bar gap-5 bg-black px-6 flex items-center justify-end text-xs text-white"
			>
				<a
					class="flex items-center gap-1 p-2 font-semibold tracking-wide text-white transition hover:text-gray-300"
					:href="`tel:${appConfig.phoneNumberRaw}`"
				>
					<PhoneIcon class="h-3 w-3" />
					{{ appConfig.phoneNumber }}
				</a>

				<a
					class="hidden items-center gap-1 p-2 font-semibold tracking-wide text-white transition hover:text-gray-300 md:flex"
					:href="`mailto:${appConfig.email}`"
				>
					<EnvelopeIcon class="h-3 w-3" />
					{{ appConfig.email }}
				</a>
			</div>

			<nav class="site-header__nav" :class="{ 'site-header__nav--open': isMenuOpen }">
				<div class="site-header__nav-row mx-auto max-w-5xl px-6 py-4 text-gray-700">
					<span> </span>

					<button
						class="site-header__menu-button"
						type="button"
						aria-label="Отвори меню"
						:aria-expanded="isMenuOpen"
						aria-controls="mobile-navigation"
						@click="isMenuOpen = !isMenuOpen"
					>
						<Bars3Icon v-if="!isMenuOpen" class="h-7 w-7" />

						<XMarkIcon v-else class="h-7 w-7" />
					</button>

					<ul class="site-header__nav-list site-header__nav-list--desktop">
						<li v-for="(item, index) in navItems" :key="item.label" class="site-header__nav-item">
							<span v-if="index !== 0" class="site-header__nav-separator" aria-hidden="true"></span>

							<NuxtLink
								class="site-header__nav-link"
								active-class="site-header__nav-link--active"
								exact-active-class="site-header__nav-link--active"
								:to="item.href"
							>
								{{ item.label }}
							</NuxtLink>
						</li>
					</ul>
				</div>

				<ul id="mobile-navigation" class="site-header__nav-list site-header__nav-list--mobile">
					<li v-for="item in navItems" :key="item.label" class="site-header__nav-item">
						<NuxtLink
							class="site-header__nav-link"
							active-class="site-header__nav-link--active"
							exact-active-class="site-header__nav-link--active"
							:to="item.href"
							@click="isMenuOpen = false"
						>
							{{ item.label }}
						</NuxtLink>
					</li>
				</ul>
			</nav>
		</div>

		<button
			class="site-header__overlay"
			type="button"
			aria-label="Затвори менюто"
			@click="isMenuOpen = false"
		></button>
	</header>
</template>

<script setup lang="ts">
import { Bars3Icon, EnvelopeIcon, PhoneIcon, XMarkIcon } from '@heroicons/vue/24/solid';

const isMenuOpen = ref(false);
const headerElement = ref<HTMLElement | null>(null);
let originalBodyOverflow = '';
const appConfig = useAppConfig();
const { navItems } = useNavigation();

function closeMenuOnOutsideClick(event: PointerEvent) {
	if (!isMenuOpen.value || headerElement.value?.contains(event.target as Node)) {
		return;
	}

	isMenuOpen.value = false;
}

watch(isMenuOpen, (isOpen) => {
	if (isOpen) {
		originalBodyOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return;
	}

	document.body.style.overflow = originalBodyOverflow;
});

onMounted(() => {
	document.addEventListener('pointerdown', closeMenuOnOutsideClick);
});

onBeforeUnmount(() => {
	document.body.style.overflow = originalBodyOverflow;
	document.removeEventListener('pointerdown', closeMenuOnOutsideClick);
});
</script>

<style scoped lang="scss">
@use '~/assets/scss/site-header.scss';
</style>
