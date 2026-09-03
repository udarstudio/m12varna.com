<script setup lang="ts">
const appConfig = useAppConfig();
const siteConfig = useSiteConfig();
const { openSettings } = useConsent();
const pageUrl = `${siteConfig.url}/politika-za-poveritelnost`;
const pageTitle = `Политика за поверителност и бисквитки | ${appConfig.siteName}`;
const pageDescription =
	'Информация за обработването на лични данни, използването на бисквитки, Google Analytics, Google Maps и контактната форма на remonti-varna.bg.';

useHead({
	title: pageTitle,
	link: [{ rel: 'canonical', href: pageUrl }],
	meta: [
		{ name: 'description', content: pageDescription },
		{ property: 'og:url', content: pageUrl },
		{ property: 'og:title', content: pageTitle },
		{ property: 'og:description', content: pageDescription },
		{ name: 'twitter:title', content: pageTitle },
		{ name: 'twitter:description', content: pageDescription },
	],
});
</script>

<template>
	<main class="mx-auto max-w-4xl px-6 py-16 text-gray-700">
		<header class="border-b border-gray-200 pb-8">
			<p class="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
				Поверителност
			</p>

			<h1 class="mt-3 text-3xl font-semibold leading-tight text-black md:text-5xl">
				Политика за поверителност и бисквитки
			</h1>

			<p class="mt-4 max-w-3xl text-lg leading-8">
				Тук обясняваме какви данни обработваме чрез {{ appConfig.siteName }}, защо са ни
				необходими и как можете да упражните правата си.
			</p>

			<p class="mt-4 text-sm text-gray-500">Последна актуализация: 3 септември 2026 г.</p>
		</header>

		<div class="space-y-10 py-10 leading-7">
			<section>
				<h2 class="text-2xl font-semibold text-black">1. Администратор на данните</h2>

				<div class="mt-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
					<p class="font-semibold text-black">{{ appConfig.legalName }}</p>

					<p>{{ appConfig.address.streetAddress }}, {{ appConfig.address.postalCode }} {{ appConfig.address.addressLocality }}</p>

					<p>
						Имейл:
						<ClientEmailLink
							class="content-link"
							tracking-location="privacy_page"
						>
							{{ appConfig.email }}
						</ClientEmailLink>
					</p>

					<p>
						Телефон:
						<a
							class="content-link"
							:href="`tel:${appConfig.phoneNumberRaw}`"
						>
							{{ appConfig.phoneNumber }}
						</a>
					</p>
				</div>
			</section>

			<section>
				<h2 class="text-2xl font-semibold text-black">2. Данни от контактната форма</h2>

				<p class="mt-4">
					Когато изпратите запитване, обработваме въведените от Вас име, телефон, имейл,
					избрана услуга и текст на съобщението. Използваме ги единствено за разглеждане на
					запитването, връзка с Вас и подготовка на оглед, консултация или оферта.
				</p>

				<p class="mt-3">
					Правното основание е предприемане на стъпки по Ваше искане преди сключване на
					договор по член 6, параграф 1, буква „б“ от GDPR, както и законният ни интерес да
					отговаряме на делови запитвания и да защитаваме формата от злоупотреби по член 6,
					параграф 1, буква „е“.
				</p>

				<p class="mt-3">
					Ако не се стигне до договор, пазим кореспонденцията до 12 месеца след последния
					контакт. При възникване на договорни или законови задължения съответните данни се
					съхраняват за приложимите законови срокове.
				</p>
			</section>

			<section>
				<h2 class="text-2xl font-semibold text-black">3. Доставчици и получатели</h2>

				<p class="mt-4">
					Контактната форма използва Web3Forms, който обработва изпратената информация и я
					препраща към нашата електронна поща. Според публикуваната от доставчика информация
					формулярите не се съхраняват постоянно, но технически дневници с лични данни могат
					да се пазят до два месеца, а сървърите се намират в САЩ.
				</p>

				<p class="mt-3">
					Когато дадете съгласие, Google обработва техническа информация чрез Google
					Analytics и/или Google Maps. Възможно е тези доставчици да обработват данни извън
					Европейското икономическо пространство съгласно приложимите механизми за защита на
					международните трансфери.
				</p>

				<p class="mt-3">
					Статичната карта на страницата „Контакти“ използва данни от OpenStreetMap. Картните
					изображения се хостват от нас и показването им не изпраща данни за посетителя към
					OpenStreetMap.
				</p>
			</section>

			<section>
				<h2 class="text-2xl font-semibold text-black">4. Бисквитки и локално съхранение</h2>

				<p class="mt-4">
					Незадължителните услуги са изключени при първото Ви посещение. Можете да приемете
					или откажете всички, както и да направите отделен избор за статистиката и картата.
				</p>

				<div class="mt-6 overflow-x-auto rounded-2xl border border-gray-200 bg-white">
					<table class="w-full min-w-[640px] text-left text-sm">
						<thead class="bg-gray-100 text-black">
							<tr>
								<th class="px-6 py-4 font-semibold">Име/услуга</th>

								<th class="px-6 py-4 font-semibold">Цел</th>

								<th class="px-6 py-4 font-semibold">Срок</th>

								<th class="px-6 py-4 font-semibold">Основание</th>
							</tr>
						</thead>

						<tbody class="divide-y divide-gray-200">
							<tr>
								<td class="px-6 py-4 font-medium text-black">m12-consent-v1</td>

								<td class="px-6 py-4">Запомня избора Ви на това устройство</td>

								<td class="px-6 py-4">До 6 месеца</td>

								<td class="px-6 py-4">Необходимо</td>
							</tr>

							<tr>
								<td class="px-6 py-4 font-medium text-black">_ga, _ga_R26LT33H3Q</td>

								<td class="px-6 py-4">Различаване на посетители и сесии в Google Analytics</td>

								<td class="px-6 py-4">До 2 години</td>

								<td class="px-6 py-4">Съгласие</td>
							</tr>

							<tr>
								<td class="px-6 py-4 font-medium text-black">Google Maps</td>

								<td class="px-6 py-4">Показване на интерактивната карта</td>

								<td class="px-6 py-4">Според настройките на Google</td>

								<td class="px-6 py-4">Съгласие</td>
							</tr>
						</tbody>
					</table>
				</div>

				<button
					type="button"
					class="mt-6 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
					@click="openSettings"
				>
					Промени настройките за бисквитки
				</button>
			</section>

			<section>
				<h2 class="text-2xl font-semibold text-black">5. Вашите права</h2>

				<p class="mt-4">
					Имате право да поискате достъп, коригиране, изтриване или ограничаване на
					обработването, както и да възразите срещу обработване, основано на законен интерес.
					Когато обработването е основано на съгласие, можете да го оттеглите по всяко време,
					без това да засяга законосъобразността на предходното обработване.
				</p>

				<p class="mt-3">
					За да упражните правата си, свържете се с нас чрез посочения по-горе имейл. Имате
					право и да подадете жалба до
					<span class="font-semibold text-black">Комисията за защита на личните данни</span>.
				</p>
			</section>
		</div>
	</main>
</template>
