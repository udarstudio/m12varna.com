<script setup lang="ts">
const {
	preferences,
	isReady,
	isSettingsOpen,
	initialiseConsent,
	savePreferences,
	acceptAll,
	rejectAll,
	closeSettings,
} = useConsent();

function saveAndClose(nextPreferences: { analytics: boolean; maps: boolean }) {
	savePreferences(nextPreferences);
	closeSettings();
}

function handleEscape(event: KeyboardEvent) {
	if (event.key === 'Escape' && isSettingsOpen.value && preferences.value.decided) {
		closeSettings();
	}
}

onMounted(() => {
	initialiseConsent();
	window.addEventListener('keydown', handleEscape);
});

onBeforeUnmount(() => {
	window.removeEventListener('keydown', handleEscape);
});
</script>

<template>
	<CookieConsentBanner
		v-if="isReady && !preferences.decided && !isSettingsOpen"
		@accept-all="acceptAll"
		@reject-all="rejectAll"
		@open-settings="isSettingsOpen = true"
	/>

	<CookieConsentSettings
		v-if="isReady && isSettingsOpen"
		:analytics="preferences.analytics"
		:maps="preferences.maps"
		:decided="preferences.decided"
		@accept-all="acceptAll"
		@reject-all="rejectAll"
		@close="closeSettings"
		@save="saveAndClose"
	/>
</template>
