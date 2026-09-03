<template>
	<main class="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-16 text-gray-700">
		<p class="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">Грешка 404</p>

		<h1 class="text-3xl md:text-5xl font-semibold leading-tight text-black">
			Страницата не е намерена
		</h1>

		<p class="max-w-3xl text-base md:text-lg text-gray-600">
			Възможно е адресът да е грешен или страницата вече да не съществува.
		</p>

		<div class="flex flex-wrap items-center gap-3 pt-2">
			<NuxtLink
				to="/"
				class="inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700 hover:text-white"
			>
				Към началото
			</NuxtLink>

			<NuxtLink
				to="/kontakti"
				class="inline-flex items-center rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:text-black"
			>
				Контакти
			</NuxtLink>
		</div>
	</main>
</template>
