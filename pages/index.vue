<script setup lang="ts">
import {
	ArrowRightIcon,
	PhoneIcon,
} from '@heroicons/vue/24/solid';

const appConfig = useAppConfig();
const siteConfig = useSiteConfig();
const { createSchemaGraph, ids, localBusiness, website } = useStructuredData();
const siteUrl = siteConfig.url || 'https://remonti-varna.bg';
const seoTitle = `Климатизация и ремонти във Варна | ${appConfig.siteName}`;
const seoDescription =
	'Монтаж и профилактика на климатици, ремонти на бани и кухни, дограма и вътрешни довършителни работи във Варна. Над 14 години опит. Обадете се за оглед и оферта.';
const homePage = {
	'@type': 'WebPage',
	'@id': ids.homepage,
	url: siteUrl,
	name: seoTitle,
	description: seoDescription,
	isPartOf: {
		'@id': ids.website,
	},
	about: {
		'@id': ids.organization,
	},
	inLanguage: 'bg',
};
const service = {
	'@type': 'Service',
	'@id': ids.homepageService,
	name: 'Климатизация и ремонтни услуги във Варна',
	description: seoDescription,
	provider: {
		'@id': ids.organization,
	},
	areaServed: {
		'@type': 'City',
		name: appConfig.serviceArea.city,
	},
	serviceType: appConfig.services,
	url: siteUrl,
	mainEntityOfPage: {
		'@id': ids.homepage,
	},
};
const homeSchema = createSchemaGraph([website, localBusiness, homePage, service]);
const heroImage = '/galeria/full/klimatizaciya/klimatizaciya-2026-proekt-varna-14.jpg';
const trustMarkers = [
	'14 години практически опит',
	'Варна и близките населени места',
	'Климатизация, ремонти, ВиК и електро услуги',
];
const serviceCards = [
	{
		title: 'Монтаж и сервиз на климатици',
		text: 'Доставка, монтаж, профилактика и поддръжка на климатични системи за жилища и търговски обекти.',
		image: '/galeria/thumbs/klimatizaciya/klimatizaciya-vanshno-tyalo-montazh-varna-01.jpg',
		alt: 'Монтаж на външно тяло на климатик във Варна',
	},
	{
		title: 'Вентилационни системи',
		text: 'Проектиране, изграждане и обслужване на вентилация за домове, офиси и работни пространства.',
		image: '/galeria/thumbs/klimatizaciya/klimatizaciya-trabi-fasada-sgrada-varna-07.jpg',
		alt: 'Климатични и вентилационни тръби по фасада във Варна',
	},
	{
		title: 'Цялостни и частични ремонти',
		text: 'Довършителни работи, изолации, външни подобрения и координация на отделните етапи.',
		image: '/galeria/thumbs/remonti/remonti-banya-s-dush-varna-01.jpg',
		alt: 'Завършен ремонт на баня във Варна',
	},
	{
		title: 'Електро и ВиК услуги',
		text: 'Изграждане, ремонт и поддръжка на електро и водопроводни инсталации.',
		image: '/galeria/thumbs/vik/vik-vodoprovodni-trabi-varna-01.jpg',
		alt: 'Водопроводни тръби при ВиК ремонт във Варна',
	},
	{
		title: 'Монтажи и логистика',
		text: 'Монтаж на дограма и оборудване, транспорт на материали и извозване на отпадъци.',
		image: '/galeria/thumbs/remonti/remonti-dvorna-vrata-montazh-varna-01.jpg',
		alt: 'Монтаж на дворна врата във Варна',
	},
];
const processSteps = [
	{
		title: 'Оглед',
		text: 'Запознаваме се с обекта, условията и желания резултат.',
	},
	{
		title: 'Оферта',
		text: 'Предлагаме ясен обхват, подходящи решения и последователност на работа.',
	},
	{
		title: 'Изпълнение',
		text: 'Поемаме организацията и работим с внимание към детайла.',
	},
	{
		title: 'Завършване',
		text: 'Предаваме обекта готов за ползване и съдействаме при нужда.',
	},
];

useHead({
	title: seoTitle,
	link: [{ rel: 'canonical', href: siteUrl }],
	meta: [
		{
			name: 'description',
			content: seoDescription,
		},
		{
			property: 'og:url',
			content: siteUrl,
		},
		{
			property: 'og:title',
			content: seoTitle,
		},
		{
			property: 'og:description',
			content: seoDescription,
		},
		{
			name: 'twitter:title',
			content: seoTitle,
		},
		{
			name: 'twitter:description',
			content: seoDescription,
		},
	],
	script: [
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify(homeSchema),
		},
	],
});
</script>

<template>
	<main class="text-slate-800">
		<section class="relative isolate min-h-[620px] overflow-hidden bg-slate-950 text-white">
			<img
				:src="heroImage"
				alt="Монтаж на климатична инсталация във Варна"
				class="absolute inset-0 -z-20 h-full w-full object-cover"
				fetchpriority="high"
			/>

			<div class="absolute inset-0 -z-10 bg-slate-950/70"></div>

			<div class="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-slate-950/90"></div>

			<div class="mx-auto flex min-h-[620px] max-w-5xl items-end px-6 py-16 md:py-20">
				<div class="max-w-3xl">
					<p class="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-200">
						{{ appConfig.legalName }} - Варна
					</p>

					<h1 class="text-4xl font-semibold leading-tight text-white md:text-5xl">
						Климатизация и ремонти във Варна
					</h1>

					<p class="mt-6 max-w-2xl text-lg leading-8 text-slate-100 md:text-2xl md:leading-9">
						14 години опит, доверие и професионализъм в климатизацията, вентилацията и
						строително-ремонтните дейности.
					</p>

					<div class="mt-8 flex flex-col gap-3 sm:flex-row">
						<a
							class="inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-black/20 transition hover:bg-teal-300"
							:href="`tel:${appConfig.phoneNumberRaw}`"
						>
							<PhoneIcon class="h-5 w-5" />
							{{ appConfig.phoneNumber }}
						</a>

						<NuxtLink
							class="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-slate-950"
							to="/galeria"
						>
							Вижте проекти
							<ArrowRightIcon class="h-4 w-4" />
						</NuxtLink>
					</div>
				</div>
			</div>
		</section>

		<section class="py-16 md:py-20">
			<div class="mx-auto max-w-5xl px-6">
				<p class="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">За нас</p>

				<h2 class="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
					Надежден партньор за климатизация и ремонти във Варна
				</h2>

				<div class="mt-6 max-w-3xl space-y-5 text-base leading-8 text-slate-700 md:text-lg">
					<p>
						Вашият надежден партньор в областта на климатизацията, вентилацията и
						строително-ремонтните дейности във Варна и региона. С времето разширихме дейността
						си, за да предлагаме цялостно управление и изпълнение на проекти.
					</p>

					<p>
						Поемаме отговорност за всеки етап - от планирането и инсталациите до
						довършителните работи. Така клиентите получават качество, сигурност и спокойствие,
						че инвестицията им е в надеждни ръце.
					</p>
				</div>

				<ul class="mt-8 list-disc space-y-2 pl-5 text-base leading-7 text-slate-700">
					<li
						v-for="marker in trustMarkers"
						:key="marker"
						class="pl-1"
					>
						{{ marker }}
					</li>
				</ul>
			</div>
		</section>

		<section class="bg-slate-100 py-16 md:py-20">
			<div class="mx-auto max-w-5xl px-6">
				<div class="max-w-3xl">
					<p class="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
						Специализирани сме в
					</p>

					<h2 class="mt-3 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
						Услуги за дома, офиса и търговски обекти
					</h2>
				</div>

				<div class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
					<article
						v-for="item in serviceCards"
						:key="item.title"
						class="overflow-hidden rounded-lg border border-slate-200 bg-slate-50 shadow-sm"
					>
						<img
							:src="item.image"
							:alt="item.alt"
							class="h-48 w-full object-cover"
							loading="lazy"
						/>

						<div class="p-6">
							<h3 class="text-xl font-semibold leading-7 text-slate-950">{{ item.title }}</h3>

							<p class="mt-3 leading-7 text-slate-600">{{ item.text }}</p>
						</div>
					</article>
				</div>
			</div>
		</section>

		<section class="py-16 md:py-20">
			<div class="mx-auto max-w-5xl px-6">
				<div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
					<div>
						<p class="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
							Начин на работа
						</p>

						<h2 class="mt-3 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
							Ясен процес от първия разговор до готовия обект
						</h2>
					</div>

					<div class="grid gap-4 sm:grid-cols-2">
						<article
							v-for="(step, index) in processSteps"
							:key="step.title"
							class="rounded-lg border border-slate-200 bg-slate-50 p-5"
						>
							<div class="flex items-center gap-3">
								<span
									class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white"
								>
									{{ index + 1 }}
								</span>

								<h3 class="text-lg font-semibold text-slate-950">{{ step.title }}</h3>
							</div>

							<p class="mt-4 leading-7 text-slate-600">{{ step.text }}</p>
						</article>
					</div>
				</div>
			</div>
		</section>

		<section class="bg-teal-600 py-14 text-white md:py-16">
			<div class="mx-auto flex max-w-5xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
				<div class="max-w-3xl">
					<p class="text-sm font-semibold uppercase tracking-[0.16em] text-teal-100">
						Нашият принцип
					</p>

					<p class="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
						Има ли желание - има и начин.
					</p>

					<p class="mt-5 max-w-2xl text-lg leading-8 text-teal-50">
						Това е отношението, с което подхождаме към всеки проект, за да намерим работещо
						решение и да удовлетворим Вашите изисквания.
					</p>
				</div>
			</div>
		</section>

		<section class="py-16 text-slate-950 md:py-20">
			<div class="mx-auto flex max-w-5xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
				<div class="max-w-2xl">
					<h2 class="text-3xl font-semibold leading-tight md:text-4xl">
						Нуждаете се от климатизация или ремонт във Варна?
					</h2>

					<p class="mt-4 text-lg leading-8 text-slate-600">
						Обадете се за оглед, консултация и оферта според конкретния обект.
					</p>
				</div>

				<a
					class="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
					:href="`tel:${appConfig.phoneNumberRaw}`"
				>
					<PhoneIcon class="h-5 w-5" />
					Обадете ни се: {{ appConfig.phoneNumber }}
				</a>
			</div>
		</section>
	</main>
</template>
