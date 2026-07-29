<script setup lang="ts">
import { ArrowRightIcon, PhoneIcon } from '@heroicons/vue/24/solid';

const appConfig = useAppConfig();
const siteConfig = useSiteConfig();
const { createSchemaGraph, ids, localBusiness, website } = useStructuredData();
const siteUrl = siteConfig.url || 'https://remonti-varna.bg';
const articlePath = '/klimatik-ne-duha-toplo';
const articleUrl = `${siteUrl}${articlePath}`;
const articleImage = `${siteUrl}/galeria/full/klimatizaciya/klimatizaciya-vatreshno-tyalo-stena-varna-04.jpg`;
const seoTitle = `Климатикът не духа топло - 5 причини и решения | Варна`;
const seoDescription =
	'Научете защо климатикът във Варна не топли и как да го поправите. Профилактика, зареждане с фреон и експертни съвети.';
const publishedDate = '2026-07-29';
const modifiedDate = '2026-07-29';
const articleWebPage = {
	'@type': 'WebPage',
	'@id': `${articleUrl}#webpage`,
	url: articleUrl,
	name: seoTitle,
	description: seoDescription,
	isPartOf: {
		'@id': ids.website,
	},
	about: {
		'@id': ids.organization,
	},
	primaryImageOfPage: {
		'@type': 'ImageObject',
		url: articleImage,
	},
	inLanguage: 'bg',
};
const article = {
	'@type': 'Article',
	'@id': `${articleUrl}#article`,
	headline: '5 основни причини климатикът да не духа топло - и какво да направим',
	description: seoDescription,
	image: articleImage,
	datePublished: publishedDate,
	dateModified: modifiedDate,
	author: {
		'@id': ids.organization,
	},
	publisher: {
		'@id': ids.organization,
	},
	mainEntityOfPage: {
		'@id': `${articleUrl}#webpage`,
	},
	inLanguage: 'bg',
};
const breadcrumbList = {
	'@type': 'BreadcrumbList',
	'@id': `${articleUrl}#breadcrumbs`,
	itemListElement: [
		{
			'@type': 'ListItem',
			position: 1,
			name: 'Начало',
			item: siteUrl,
		},
		{
			'@type': 'ListItem',
			position: 2,
			name: 'Климатикът не духа топло',
			item: articleUrl,
		},
	],
};
const articleSchema = createSchemaGraph([website, localBusiness, articleWebPage, article, breadcrumbList]);

useHead({
	title: seoTitle,
	link: [{ rel: 'canonical', href: articleUrl }],
	meta: [
		{ name: 'description', content: seoDescription },
		{ property: 'og:type', content: 'article' },
		{ property: 'og:url', content: articleUrl },
		{ property: 'og:title', content: seoTitle },
		{ property: 'og:description', content: seoDescription },
		{ property: 'og:image', content: articleImage },
		{ property: 'article:published_time', content: publishedDate },
		{ property: 'article:modified_time', content: modifiedDate },
		{ name: 'twitter:card', content: 'summary_large_image' },
		{ name: 'twitter:title', content: seoTitle },
		{ name: 'twitter:description', content: seoDescription },
		{ name: 'twitter:image', content: articleImage },
	],
	script: [
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify(articleSchema),
		},
	],
});
</script>

<template>
	<main class="text-slate-800">
		<section class="relative isolate overflow-hidden bg-slate-950 text-white">
			<img
				src="/galeria/full/klimatizaciya/klimatizaciya-vatreshno-tyalo-stena-varna-04.jpg"
				alt="Монтиран вътрешен климатик в жилище във Варна"
				class="absolute inset-0 -z-20 h-full w-full object-cover"
				fetchpriority="high"
			/>

			<div class="absolute inset-0 -z-10 bg-black/75"></div>

			<div class="mx-auto flex min-h-[520px] max-w-5xl items-end px-6 py-16 md:py-20">
				<div class="max-w-4xl">
					<NuxtLink
						to="/"
						class="inline-flex items-center gap-2 text-sm font-semibold text-teal-200 transition hover:text-white"
					>
						<ArrowRightIcon class="h-4 w-4 rotate-180" />
						Начало
					</NuxtLink>

					<p class="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-teal-200">
						Съвети за климатизация
					</p>

					<h1 class="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
						5 основни причини климатикът да не духа топло
					</h1>

					<p class="mt-6 max-w-3xl text-lg leading-8 text-slate-100 md:text-xl md:leading-9">
						Преди да се притесните, проверете най-честите причини. В много случаи проблемът е
						лесен за разпознаване, а при нужда можем да съдействаме с диагностика и обслужване във
						Варна и региона.
					</p>

					<p class="mt-6 text-sm font-semibold text-slate-300">Публикувано на 29.07.2026</p>
				</div>
			</div>
		</section>

		<article class="mx-auto max-w-5xl px-6 py-14 md:py-20">
			<div class="max-w-4xl space-y-10">
				<section class="space-y-5 text-lg leading-8 text-slate-700">
					<p>
						Когато живеете край морето през зимата, едно от най-неприятните неща е климатикът да
						не духа топло. Не бързайте да изпадате в паника, преди да проверите основните причини.
						Проблемът може да е лесно решим във Вашия случай.
					</p>
				</section>

				<section class="space-y-5">
					<h2 class="text-2xl font-semibold leading-tight text-slate-950 md:text-3xl">
						1. Климатикът е на грешен режим
					</h2>

					<p class="text-lg leading-8 text-slate-700">
						Звучи елементарно, но понякога търсим по-голям проблем, когато отговорът е точно под
						носа ни. Случва се да натиснем грешното копче на дистанционното или настройките да се
						рестартират сами.
					</p>

					<ul class="list-disc space-y-3 pl-5 text-lg leading-8 text-slate-700">
						<li>
							Проверете дали режимът е HEAT, а не COOL. Ако имате бутон Mode, натискайте го,
							докато излезе символът за отопление.
						</li>

						<li>Температурата трябва да бъде по-висока от обичайната стайна температура.</li>
					</ul>
				</section>

				<section class="space-y-5">
					<h2 class="text-2xl font-semibold leading-tight text-slate-950 md:text-3xl">
						2. Климатикът влиза в режим дефрост
					</h2>

					<p class="text-lg leading-8 text-slate-700">
						През зимата, заради влажния въздух, външните тела на климатиците във Варна замръзват
						при определени условия. В този момент климатикът спира да духа топло, може да духа
						студено или да спре временно.
					</p>

					<ul class="list-disc space-y-3 pl-5 text-lg leading-8 text-slate-700">
						<li>Това е нормално и обикновено трае около 5-15 минути.</li>

						<li>
							Ако се случва често, външното тяло е постоянно заледено или климатикът не започва
							да топли след това, проблемът може да е по-сериозен.
						</li>
					</ul>
				</section>

				<section class="space-y-5">
					<h2 class="text-2xl font-semibold leading-tight text-slate-950 md:text-3xl">
						3. Замърсени филтри
					</h2>

					<p class="text-lg leading-8 text-slate-700">
						Филтрите са мрежести пластмасови решетки във вътрешното тяло. Те спират праха, пазят
						вътрешните части на климатика и осигуряват нормален въздушен поток.
					</p>

					<p class="text-lg leading-8 text-slate-700">
						Ако не са чистени отдавна, въздушният поток става по-слаб, а климатикът не може да
						отоплява ефективно. Редовното почистване е полезно както за работата на климатика, така
						и за качеството на въздуха.
					</p>

					<div class="rounded-lg border border-slate-200 bg-slate-50 p-6">
						<h3 class="text-xl font-semibold text-slate-950">Как да ги почистите</h3>

						<ol class="mt-4 list-decimal space-y-2 pl-5 leading-7 text-slate-700">
							<li>Извадете внимателно филтрите.</li>

							<li>Измийте ги с хладка вода.</li>

							<li>Оставете ги да изсъхнат напълно, преди да ги върнете.</li>
						</ol>
					</div>

					<div class="rounded-lg border border-teal-200 bg-teal-50 p-6">
						<p class="font-semibold leading-7 text-slate-950">
							Важно: почистването на филтрите не заменя нуждата от редовна профилактика.
						</p>

						<p class="mt-3 leading-7 text-slate-700">
							За да работи климатикът ефективно и без проблеми, свържете се с нас за оглед и
							обслужване.
						</p>
					</div>
				</section>

				<section class="space-y-5">
					<h2 class="text-2xl font-semibold leading-tight text-slate-950 md:text-3xl">
						4. Недостатъчен фреон
					</h2>

					<p class="text-lg leading-8 text-slate-700">
						Ако има теч или системата не е заредена добре, климатикът духа хладно, вместо топло.
						Работи, но не отоплява. Важно е да разграничите това от нормалния режим дефрост.
					</p>

					<p class="text-lg leading-8 text-slate-700">
						При липса на фреон климатикът постоянно духа хладно или леко топло и не успява да
						затопли стаята, дори да го оставите да работи дълго.
					</p>

					<p class="text-lg leading-8 text-slate-700">
						Ако търсите ремонт на климатик във Варна или зареждане с фреон, можем да съдействаме с
						бърза диагностика и коректно обслужване на място.
					</p>
				</section>

				<section class="space-y-5">
					<h2 class="text-2xl font-semibold leading-tight text-slate-950 md:text-3xl">
						5. Проблем с външното тяло
					</h2>

					<p class="text-lg leading-8 text-slate-700">
						Възможните причини са замръзване на външното тяло, блокиран вентилатор или повреда в
						компресора. Ако се е стигнало дотам, може да чуете шум, да усетите, че помещението не се
						затопля, или климатикът просто да спре да работи.
					</p>
				</section>

				<section class="space-y-5 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
					<p class="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">Бонус</p>

					<h2 class="text-2xl font-semibold leading-tight text-slate-950 md:text-3xl">
						Старата дограма изпуска топлината
					</h2>

					<p class="text-lg leading-8 text-slate-700">
						Понякога проблемът не е в климатика, а в дограмата на помещението. Ако дограмата е
						стара, пропуска или е неправилно монтирана, топлият въздух излиза, а студеният влиза
						вътре. Така климатикът работи постоянно, но не успява да затопли стаята.
					</p>

					<ul class="list-disc space-y-3 pl-5 text-lg leading-8 text-slate-700">
						<li>подмяна на дограмата</li>

						<li>правилен монтаж</li>

						<li>избор на подходящ профил и стъклопакет</li>
					</ul>

					<p class="text-lg leading-8 text-slate-700">
						Можем да помогнем с професионален демонтаж на стара дограма, монтаж на нова дограма и
						консултация при избор на подходящо решение според жилището. Работим във Варна и региона.
					</p>
				</section>

				<section class="space-y-5">
					<h2 class="text-2xl font-semibold leading-tight text-slate-950 md:text-3xl">
						Нашият съвет
					</h2>

					<p class="text-lg leading-8 text-slate-700">
						Редовната профилактика 1 или 2 пъти годишно предотвратява повечето от тези проблеми и
						удължава живота на климатика.
					</p>
				</section>

				<section class="rounded-lg bg-black p-6 text-white md:p-8">
					<h2 class="text-2xl font-semibold leading-tight">
						Нужда от ремонт или профилактика на климатик във Варна?
					</h2>

					<p class="mt-4 max-w-2xl leading-7 text-slate-200">
						Ако Вашият климатик не работи правилно, можем да помогнем бързо и коректно с
						диагностика, ремонт, зареждане с фреон, монтаж или демонтаж.
					</p>

					<div class="mt-6 flex flex-col gap-3 sm:flex-row">
						<a
							class="inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-300"
							:href="`tel:${appConfig.phoneNumberRaw}`"
						>
							<PhoneIcon class="h-5 w-5" />
							{{ appConfig.phoneNumber }}
						</a>

						<NuxtLink
							to="/kontakti"
							class="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950"
						>
							Изпратете запитване
							<ArrowRightIcon class="h-4 w-4" />
						</NuxtLink>
					</div>
				</section>
			</div>
		</article>
	</main>
</template>
