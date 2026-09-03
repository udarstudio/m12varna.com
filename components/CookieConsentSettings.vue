<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline';

const props = defineProps<{
	analytics: boolean;
	maps: boolean;
	decided: boolean;
}>();

const emit = defineEmits<{
	acceptAll: [];
	rejectAll: [];
	close: [];
	save: [preferences: { analytics: boolean; maps: boolean }];
}>();

const draftAnalytics = ref(props.analytics);
const draftMaps = ref(props.maps);

function savePreferences() {
	emit('save', {
		analytics: draftAnalytics.value,
		maps: draftMaps.value,
	});
}
</script>

<template>
	<div
		class="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm"
		role="dialog"
		aria-modal="true"
		aria-labelledby="consent-settings-title"
		@click.self="decided && $emit('close')"
	>
		<div class="w-full max-w-2xl rounded-3xl bg-white p-3 shadow-2xl sm:p-6 md:p-8">
			<div class="flex items-start justify-between gap-4">
				<div>
					<p class="hidden text-xs font-semibold uppercase tracking-[0.16em] text-teal-700 sm:block">
						Поверителност
					</p>

					<h2 id="consent-settings-title" class="mt-2 text-2xl font-semibold text-black">
						Настройки за бисквитки
					</h2>
				</div>

				<button
					v-if="decided"
					type="button"
					class="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gray-200 bg-white text-black transition hover:border-teal-500 hover:text-teal-700"
					aria-label="Затвори настройките"
					@click="$emit('close')"
				>
					<XMarkIcon class="h-5 w-5" aria-hidden="true" />
				</button>
			</div>

			<p class="mt-4 text-sm leading-6 text-gray-600">
				Можете да изберете кои незадължителни услуги да разрешите и да промените избора си по
				всяко време.
			</p>

			<div class="mt-4 divide-y divide-gray-200 rounded-2xl border border-gray-200 sm:mt-6">
				<div class="p-2.5 sm:p-6">
					<div class="flex items-center justify-between gap-6">
						<h3 class="font-semibold text-black">Необходими</h3>

						<span class="shrink-0 text-sm font-semibold text-teal-700">Винаги активни</span>
					</div>

					<p class="mt-1 text-sm leading-6 text-gray-600">
						Запазват избора Ви за поверителност. Сайтът не може да помни настройките без тях.
					</p>
				</div>

				<label class="block cursor-pointer p-2.5 sm:p-6">
					<span class="flex items-center justify-between gap-6">
						<span class="font-semibold text-black">Google Analytics</span>

						<input
							v-model="draftAnalytics"
							type="checkbox"
							class="h-5 w-5 shrink-0 accent-teal-700"
						/>
					</span>

					<span class="mt-1 block text-sm leading-6 text-gray-600">
						Помага ни да разберем кои страници и услуги са полезни и как посетителите достигат до
						запитване.
					</span>
				</label>

				<label class="block cursor-pointer p-2.5 sm:p-6">
					<span class="flex items-center justify-between gap-6">
						<span class="font-semibold text-black">Google Maps</span>

						<input
							v-model="draftMaps"
							type="checkbox"
							class="h-5 w-5 shrink-0 accent-teal-700"
						/>
					</span>

					<span class="mt-1 block text-sm leading-6 text-gray-600">
						Зарежда интерактивната карта с адреса ни на страницата „Контакти“.
					</span>
				</label>
			</div>

			<div class="mt-4 grid gap-4 sm:mt-6 md:grid-cols-3">
				<button
					type="button"
					class="whitespace-nowrap rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-teal-500 hover:text-teal-700"
					@click="$emit('rejectAll')"
				>
					Само необходимите
				</button>

				<button
					type="button"
					class="whitespace-nowrap rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-teal-500 hover:text-teal-700"
					@click="savePreferences"
				>
					Запази избора
				</button>

				<button
					type="button"
					class="whitespace-nowrap rounded-full border-2 border-teal-700 bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition hover:border-black hover:bg-black"
					@click="$emit('acceptAll')"
				>
					Приемам всички
				</button>
			</div>
		</div>
	</div>
</template>
