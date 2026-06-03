<script setup lang="ts">
const appConfig = useAppConfig();
const siteConfig = useSiteConfig();
const { createSchemaGraph, ids, localBusiness, website } = useStructuredData();
const siteUrl = siteConfig.url || 'https://remonti-varna.bg';
const pricesUrl = `${siteUrl}/ceni`;
const seoTitle = `Цени | ${appConfig.siteName}`;
const seoDescription =
	'Ориентировъчни цени за климатични услуги и информация за оферти след оглед за ремонтни, ВиК, електро и монтажни дейности от Мани 12 ЕООД във Варна.';
type PriceCategory = {
	id: string;
	label: string;
	title: string;
	description: string;
};

const priceCategories: PriceCategory[] = [
	{
		id: 'klimatizaciya',
		label: 'Климатизация',
		title: 'Климатизация',
		description: 'Ориентировъчни цени за монтаж, демонтаж, профилактика и допълнителни дейности.',
	},
	{
		id: 'remonti',
		label: 'Ремонти',
		title: 'Ремонтни дейности',
		description:
			'Цената за ремонтни дейности се определя след оглед и конкретна оферта според състоянието на обекта, обема работа, материалите и сроковете за изпълнение.',
	},
	{
		id: 'vik',
		label: 'ВиК',
		title: 'ВиК услуги',
		description:
			'Цената за ВиК услуги зависи от вида на инсталацията, достъпа, нужните материали и сложността на ремонта. Конкретна цена се дава след оглед.',
	},
	{
		id: 'elektro',
		label: 'Електро',
		title: 'Електро услуги',
		description:
			'Цената за електро услуги се определя според обема работа, състоянието на инсталацията и необходимите материали. След оглед изготвяме конкретна оферта.',
	},
	{
		id: 'montazhi',
		label: 'Дограма и монтажи',
		title: 'Дограма и монтажи',
		description:
			'Цената зависи от вида монтаж, размерите, достъпа и допълнителните дейности. Конкретна оферта се подготвя след оглед.',
	},
];
const activeCategoryId = ref(priceCategories[0].id);
const activeCategory = computed(
	() => priceCategories.find((category) => category.id === activeCategoryId.value) || priceCategories[0]
);
const hasClimatePrices = computed(() => activeCategory.value.id === 'klimatizaciya');
const prices = [
	{
		service: 'Монтаж-стандартен сплит система 9-12',
		unit: 'бр.',
		price: '180,00 €',
		note: 'До 3 м.л. тръбен път и пряк достъп до външно тяло. За по-големи машини цената се определя индивидуално след оглед.',
	},
	{
		service: 'Допълнителен тръбен път (6/10)',
		unit: 'м.л.',
		price: '30,00 €',
		note: '',
	},
	{
		service: 'Кондензна тава',
		unit: 'бр.',
		price: '70,00 €',
		note: 'Включва отводняване до 9 м.л.',
	},
	{
		service: 'Стойки поцинковани',
		unit: 'к-т',
		price: '30,00 €',
		note: 'Включва крепежи.',
	},
	{
		service: 'Допълнителен захранващ кабел',
		unit: 'м.л.',
		price: '8,00 €',
		note: '',
	},
	{
		service: 'Демонтаж на сплит система',
		unit: 'бр.',
		price: '60-100,00 €',
		note: 'В зависимост от големината на машината.',
	},
	{
		service: 'PVC тръба за конденз',
		unit: 'м.л.',
		price: '6,70 €',
		note: 'До Ф32 мм.',
	},
	{
		service: 'Вкопаване в тухла',
		unit: 'м.л.',
		price: '25,00 €',
		note: '',
	},
	{
		service: 'Вкопаване в замазка',
		unit: 'м.л.',
		price: '30,00 €',
		note: '',
	},
	{
		service: 'Вкопаване в бетон',
		unit: 'м.л.',
		price: '40-60,00 €',
		note: 'Избягва се като дейност, извършва се в крайна необходимост.',
	},
	{
		service: 'Втори отвор за тръбен сноп',
		unit: 'бр.',
		price: '25-50,00 €',
		note: 'В зависимост от вида на стената и дълбочината на дупката',
	},
	{
		service: 'Тампони',
		unit: 'к-т',
		price: '20-40,00 €',
		note: 'В зависимост от големината на машината.',
	},
	{
		service: 'Демонтаж и монтаж на стъклопакет',
		unit: 'бр.',
		price: '40,00 €',
		note: 'Без гаранция за стъклопакета.',
	},
	{
		service: 'Използване на алпийски способ',
		unit: 'ч.ден',
		price: '200,00 €',
		note: 'Доплаща се при необходимост.',
	},
	{
		service: 'Монтаж с използване на висока стълба',
		unit: 'бр.',
		price: '70,00 €',
		note: 'Доплаща се към стандартния монтаж.',
	},
	{
		service: 'Транспорт извън град Варна',
		unit: 'км.',
		price: '0,70 €',
		note: 'Изчислява се в двете посоки.',
	},
	{
		service: 'Качване на техника след 2 етаж (без асансьор)',
		unit: 'ет.',
		price: '6,00 €',
		note: 'Плаща се на брой кашони за всеки етаж и всеки човек необходим за качването.',
	},
	{
		service: 'Продухване с азот',
		unit: 'бр.',
		price: '20,00 €',
		note: 'До 5 м.л.',
	},
	{
		service: 'Азотна проба',
		unit: 'бр.',
		price: '60,00 €',
		note: '24 часа.',
	},
	{
		service: 'Профилактика на сплит система 9-12-18-24',
		unit: 'бр.',
		price: '40-120,00 €',
		note: 'Зависи от достъпа до двете тела и големината им.',
	},
];
const pricesPage = {
	'@type': 'WebPage',
	'@id': `${pricesUrl}#webpage`,
	url: pricesUrl,
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
const pricesSchema = createSchemaGraph([website, localBusiness, pricesPage]);

useHead({
	title: seoTitle,
	link: [{ rel: 'canonical', href: pricesUrl }],
	meta: [
		{ name: 'description', content: seoDescription },
		{ property: 'og:url', content: pricesUrl },
		{ property: 'og:title', content: seoTitle },
		{ property: 'og:description', content: seoDescription },
		{ name: 'twitter:title', content: seoTitle },
		{ name: 'twitter:description', content: seoDescription },
	],
	script: [
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify(pricesSchema),
		},
	],
});
</script>

<template>
	<main class="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-16 text-gray-700">
		<section class="flex flex-col gap-4">
			<h1 class="text-3xl font-semibold leading-tight text-slate-900 md:text-5xl">Ценова листа</h1>

			<p class="max-w-3xl text-lg">
				За климатични услуги публикуваме ориентировъчни цени. За останалите дейности цената се
				определя след оглед и конкретна оферта според реалните условия на място.
			</p>
		</section>

		<div class="flex gap-2 overflow-x-auto rounded-3xl border border-gray-200 bg-white p-2 shadow-sm">
			<button
				v-for="category in priceCategories"
				:key="category.id"
				type="button"
				class="whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-semibold transition"
				:class="
					activeCategoryId === category.id
						? 'border-black bg-black text-white shadow-sm'
						: 'border-transparent text-slate-700 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900'
				"
				@click="activeCategoryId = category.id"
			>
				{{ category.label }}
			</button>
		</div>

		<section class="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
			<div class="border-b border-gray-200 px-5 py-4">
				<h2 class="text-2xl font-semibold text-slate-900">{{ activeCategory.title }}</h2>

				<p class="mt-2 max-w-3xl text-sm leading-6 text-gray-600">
					{{ activeCategory.description }}
				</p>
			</div>

			<div v-if="hasClimatePrices" class="overflow-x-auto">
				<table class="min-w-[860px] divide-y divide-gray-200 text-left">
					<thead class="bg-slate-900 text-xs uppercase tracking-[0.12em] text-white">
						<tr>
							<th scope="col" class="w-[36%] px-5 py-4 font-semibold">Услуга</th>

							<th scope="col" class="w-[10%] px-4 py-4 text-center font-semibold">МЕ</th>

							<th scope="col" class="w-[16%] px-4 py-4 text-right font-semibold">Цена</th>

							<th scope="col" class="w-[38%] px-5 py-4 font-semibold">Забележка</th>
						</tr>
					</thead>

					<tbody class="divide-y divide-gray-100">
						<tr v-for="item in prices" :key="item.service" class="transition hover:bg-slate-50">
							<th scope="row" class="px-5 py-4 text-sm font-semibold text-slate-900">
								{{ item.service }}
							</th>

							<td class="px-4 py-4 text-center text-sm text-gray-600">{{ item.unit }}</td>

							<td
								class="whitespace-nowrap px-4 py-4 text-right text-sm font-semibold text-slate-900"
							>
								{{ item.price }}
							</td>

							<td class="px-5 py-4 text-sm leading-6 text-gray-600">
								{{ item.note || '—' }}
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div v-else class="grid gap-5 p-6 md:grid-cols-[1fr_auto] md:items-center">
				<div class="max-w-3xl">
					<p class="text-lg font-semibold text-slate-900">Цената се дава след оглед</p>

					<p class="mt-2 leading-7">
						За тези дейности крайната стойност зависи от обема работа, достъпа, състоянието на
						обекта, нужните материали и сроковете. След оглед подготвяме конкретна оферта според
						реалните условия.
					</p>
				</div>

				<NuxtLink
					to="/kontakti"
					class="inline-flex w-fit rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700 hover:text-white"
				>
					Заявете оглед
				</NuxtLink>
			</div>
		</section>

		<p class="w-fit rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold">
			Цените са без ДДС
		</p>

		<section
			class="flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white shadow-sm p-6 mt-6 md:flex-row md:items-center md:justify-between"
		>
			<div class="max-w-2xl">
				<h2 class="text-2xl font-semibold text-slate-900">Нужен е точен оглед?</h2>

				<p class="mt-2">
					При нестандартен достъп, по-големи машини или комбинирани дейности ще уточним крайната
					стойност след разговор или оглед.
				</p>
			</div>

			<NuxtLink
				to="/kontakti"
				class="inline-flex w-fit rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700 hover:text-white"
			>
				Свържете се с нас
			</NuxtLink>
		</section>
	</main>
</template>
