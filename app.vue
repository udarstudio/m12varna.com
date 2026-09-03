<template>
	<div class="text-black min-h-screen overflow-x-hidden">
		<GoogleAnalytics />

		<div class="bg-[var(--site-background-color)]">
			<Header />

			<NuxtPage />

			<Footer />
		</div>

		<CookieConsent />
	</div>
</template>
