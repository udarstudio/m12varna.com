<template>
	<ClientOnly>
		<a :href="`mailto:${appConfig.email}`" v-bind="attrs" @click="trackEmailClick">
			<slot>{{ appConfig.email }}</slot>
		</a>

		<template #fallback>
			<span v-bind="fallbackAttrs">
				<slot name="fallback">{{ fallbackText }}</slot>
			</span>
		</template>
	</ClientOnly>
</template>

<script setup lang="ts">
defineOptions({
	inheritAttrs: false,
});

const props = withDefaults(
	defineProps<{
		fallbackText?: string;
		trackingLocation?: string;
	}>(),
	{
		fallbackText: 'Имейл',
		trackingLocation: 'site',
	}
);

const appConfig = useAppConfig();
const attrs = useAttrs();
const { trackEvent } = useGoogleAnalytics();
const fallbackAttrs = computed(() => {
	const safeAttrs = { ...attrs };

	delete safeAttrs.href;
	delete safeAttrs.rel;
	delete safeAttrs.target;

	return safeAttrs;
});

function trackEmailClick() {
	trackEvent('email_click', { link_location: props.trackingLocation });
}
</script>
