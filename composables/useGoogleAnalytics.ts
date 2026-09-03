type GoogleTagArguments = [command: string, ...parameters: unknown[]];

declare global {
	interface Window {
		dataLayer?: GoogleTagArguments[];
		gtag?: (...args: GoogleTagArguments) => void;
		[key: `ga-disable-${string}`]: boolean | undefined;
	}
}

export function useGoogleAnalytics() {
	const { preferences } = useConsent();

	function trackEvent(eventName: string, eventParameters: Record<string, string | number> = {}) {
		if (!import.meta.client || !preferences.value.analytics || !window.gtag) {
			return;
		}

		window.gtag('event', eventName, eventParameters);
	}

	return {
		trackEvent,
	};
}
