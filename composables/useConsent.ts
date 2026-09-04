export interface ConsentPreferences {
	analytics: boolean;
	maps: boolean;
	decided: boolean;
	updatedAt: string | null;
}

const CONSENT_STORAGE_KEY = 'm12-consent-v1';
const CONSENT_MAX_AGE_MS = 180 * 24 * 60 * 60 * 1000;

const defaultPreferences = (): ConsentPreferences => ({
	analytics: false,
	maps: false,
	decided: false,
	updatedAt: null,
});

export function useConsent() {
	const preferences = useState<ConsentPreferences>('m12-consent-preferences', defaultPreferences);
	const isReady = useState<boolean>('m12-consent-ready', () => false);
	const isSettingsOpen = useState<boolean>('m12-consent-settings-open', () => false);

	function initialiseConsent() {
		if (!import.meta.client || isReady.value) {
			return;
		}

		try {
			const storedPreferences = window.localStorage.getItem(CONSENT_STORAGE_KEY);

			if (storedPreferences) {
				const parsedPreferences = JSON.parse(storedPreferences) as Partial<ConsentPreferences>;
				const updatedAt =
					typeof parsedPreferences.updatedAt === 'string'
						? Date.parse(parsedPreferences.updatedAt)
						: Number.NaN;

				if (!Number.isFinite(updatedAt) || Date.now() - updatedAt > CONSENT_MAX_AGE_MS) {
					window.localStorage.removeItem(CONSENT_STORAGE_KEY);
					preferences.value = defaultPreferences();
					isReady.value = true;
					return;
				}

				preferences.value = {
					analytics: parsedPreferences.analytics === true,
					maps: parsedPreferences.maps === true,
					decided: parsedPreferences.decided === true,
					updatedAt: parsedPreferences.updatedAt,
				};
			}
		} catch {
			window.localStorage.removeItem(CONSENT_STORAGE_KEY);
			preferences.value = defaultPreferences();
		}

		isReady.value = true;
	}

	function savePreferences(nextPreferences: Pick<ConsentPreferences, 'analytics' | 'maps'>) {
		preferences.value = {
			...nextPreferences,
			decided: true,
			updatedAt: new Date().toISOString(),
		};

		if (import.meta.client) {
			window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(preferences.value));
		}
	}

	function acceptAll() {
		savePreferences({ analytics: true, maps: true });
		isSettingsOpen.value = false;
	}

	function rejectAll() {
		savePreferences({ analytics: false, maps: false });
		isSettingsOpen.value = false;
	}

	function openSettings() {
		isSettingsOpen.value = true;
	}

	function closeSettings() {
		isSettingsOpen.value = false;
	}

	return {
		preferences,
		isReady,
		isSettingsOpen,
		initialiseConsent,
		savePreferences,
		acceptAll,
		rejectAll,
		openSettings,
		closeSettings,
	};
}
