<script setup lang="ts">
defineEmits<{
	acceptAll: [];
	rejectAll: [];
	openSettings: [];
}>();
</script>

<template>
	<section
		class="fixed inset-x-0 bottom-0 z-[90] border-t border-white/15 bg-black py-8 text-white shadow-2xl"
		aria-label="Настройки за поверителност"
	>
		<div class="mx-auto flex max-w-5xl flex-col gap-6 px-6">
			<div class="max-w-2xl">
				<h2 class="text-lg font-semibold">Вашата поверителност е важна</h2>

				<p class="mt-2 text-sm leading-6 text-gray-300">
					Използваме Google Analytics за статистика за посещенията и Google Maps за показване на
					интерактивна карта. Те се зареждат само с Вашето разрешение.
					<NuxtLink
						to="/politika-za-poveritelnost"
						class="font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
					>
						Научете повече
					</NuxtLink>
				</p>
			</div>

			<div
				class="grid w-full gap-4 sm:mx-auto sm:max-w-3xl sm:grid-cols-3 lg:ml-0 lg:mr-auto"
			>
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-full border border-white/50 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
					@click="$emit('rejectAll')"
				>
					Само необходимите
				</button>

				<button
					type="button"
					class="inline-flex items-center justify-center rounded-full border border-white/50 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
					@click="$emit('openSettings')"
				>
					Настройки
				</button>

				<button
					type="button"
					class="inline-flex items-center justify-center rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-black/20 transition hover:bg-teal-300"
					@click="$emit('acceptAll')"
				>
					Приемам всички
				</button>
			</div>
		</div>
	</section>
</template>
