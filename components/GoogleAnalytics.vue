<script setup lang="ts">
const config = useRuntimeConfig();
const router = useRouter();
const route = useRoute();
const { preferences, isReady } = useConsent();
const measurementId = String(config.public.googleAnalyticsId || '');
let isLoaded = false;

function setGoogleAnalyticsDisabled(isDisabled: boolean) {
	if (!measurementId) {
		return;
	}

	window[`ga-disable-${measurementId}`] = isDisabled;
}

function configureDataLayer() {
	window.dataLayer = window.dataLayer || [];
	window.gtag =
		window.gtag ||
		function () {
			window.dataLayer?.push(arguments);
		};
}

function sendPageView() {
	if (!preferences.value.analytics || !window.gtag) {
		return;
	}

	window.gtag('event', 'page_view', {
		page_title: document.title,
		page_location: window.location.href,
		page_path: route.fullPath,
	});
}

function loadGoogleAnalytics() {
	if (!measurementId || isLoaded) {
		return;
	}

	setGoogleAnalyticsDisabled(false);
	configureDataLayer();

	window.gtag?.('consent', 'default', {
		ad_storage: 'denied',
		ad_user_data: 'denied',
		ad_personalization: 'denied',
		analytics_storage: 'granted',
	});
	window.gtag?.('js', new Date());
	window.gtag?.('config', measurementId, {
		send_page_view: false,
	});

	const script = document.createElement('script');
	script.id = 'google-analytics-tag';
	script.async = true;
	script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
	document.head.appendChild(script);

	isLoaded = true;
	nextTick(sendPageView);
}

function removeGoogleAnalyticsCookies() {
	const cookieNames = document.cookie
		.split(';')
		.map((cookie) => cookie.split('=')[0]?.trim())
		.filter((cookieName): cookieName is string =>
			Boolean(cookieName && (cookieName === '_ga' || cookieName.startsWith('_ga_')))
		);
	const domains = ['', window.location.hostname, `.${window.location.hostname}`];

	for (const cookieName of cookieNames) {
		for (const domain of domains) {
			const domainAttribute = domain ? `; domain=${domain}` : '';
			document.cookie = `${cookieName}=; Max-Age=0; path=/${domainAttribute}; SameSite=Lax`;
		}
	}
}

function disableGoogleAnalytics() {
	setGoogleAnalyticsDisabled(true);

	if (window.gtag) {
		window.gtag('consent', 'update', {
			analytics_storage: 'denied',
			ad_storage: 'denied',
			ad_user_data: 'denied',
			ad_personalization: 'denied',
		});
	}

	removeGoogleAnalyticsCookies();
}

watch(
	[isReady, () => preferences.value.analytics],
	([ready, analyticsAllowed]) => {
		if (!ready) {
			return;
		}

		if (analyticsAllowed) {
			loadGoogleAnalytics();
			return;
		}

		disableGoogleAnalytics();
	},
	{ immediate: true }
);

const removeRouterHook = router.afterEach(() => {
	nextTick(sendPageView);
});

onBeforeUnmount(removeRouterHook);
</script>

<template>
	<span v-if="false" aria-hidden="true"></span>
</template>
