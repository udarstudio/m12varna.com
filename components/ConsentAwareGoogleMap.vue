<script setup lang="ts">
import { MapPinIcon } from '@heroicons/vue/24/outline';

defineProps<{
	src: string;
	title: string;
}>();

const { preferences, isReady } = useConsent();
const mapTiles = [
	'37845-24024',
	'37846-24024',
	'37847-24024',
	'37845-24025',
	'37846-24025',
	'37847-24025',
	'37845-24026',
	'37846-24026',
	'37847-24026',
];
</script>

<template>
	<iframe
		v-if="isReady && preferences.maps"
		class="h-[420px] w-full"
		:src="src"
		:title="title"
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
	></iframe>

	<div
		v-else
		class="relative h-[420px] overflow-hidden bg-gray-100"
		aria-label="Статична карта до офиса на Мани 12 ЕООД"
	>
		<div
			class="absolute left-1/2 top-1/2 grid h-[768px] w-[768px] -translate-x-1/2 -translate-y-1/2 grid-cols-3 grid-rows-3"
			aria-hidden="true"
		>
			<img
				v-for="tile in mapTiles"
				:key="tile"
				:src="`/map-tiles/${tile}.png`"
				alt=""
				width="256"
				height="256"
				loading="lazy"
			/>

			<div
				class="absolute left-[44.02%] top-[55.86%] -translate-x-1/2 -translate-y-full"
			>
				<MapPinIcon class="h-12 w-12 fill-teal-700 text-white drop-shadow-lg" aria-hidden="true" />
			</div>
		</div>

		<span
			class="absolute bottom-1 right-1 rounded bg-white/90 px-1.5 py-0.5 text-[10px] text-gray-700"
		>
			Карта © сътрудниците на OpenStreetMap · ODbL
		</span>
	</div>
</template>
