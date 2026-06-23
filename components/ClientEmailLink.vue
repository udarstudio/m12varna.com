<template>
	<ClientOnly>
		<a :href="`mailto:${appConfig.email}`" v-bind="attrs">
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

withDefaults(
	defineProps<{
		fallbackText?: string;
	}>(),
	{
		fallbackText: 'Имейл',
	}
);

const appConfig = useAppConfig();
const attrs = useAttrs();
const fallbackAttrs = computed(() => {
	const safeAttrs = { ...attrs };

	delete safeAttrs.href;
	delete safeAttrs.rel;
	delete safeAttrs.target;

	return safeAttrs;
});
</script>
