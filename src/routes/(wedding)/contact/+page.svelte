<script lang="ts">
	import { themeStorageKey } from './../../../../node_modules/mode-watcher/dist/stores.js';
	import Bounded from '$lib/components/bounded.svelte';
	import Heading1 from '$lib/components/heading1.svelte';
	import Hero from '$lib/components/hero.svelte';
	import IconEmail from '~icons/ph/envelope';
	import IconMap from '~icons/ph/map-pin-line';
	import IconPhone from '~icons/ph/phone';
	import type { PageData } from './$types.js';
	import ContactForm from '$lib/components/contactForm.svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';

	export let data: PageData;

	const contactInfo = [
		{ icon: IconPhone, data: '+47 97 52 31 74' },
		{ icon: IconEmail, data: 'stefan@spphoto.no' },
		{ icon: IconMap, data: 'Moss / Oslo' }
	];
</script>

<Hero
	image="https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/77fe11c5-a147-4bc9-0d9a-351320b03f00/Large"
/>

<Bounded>
	<Heading1 class="">Kontakt</Heading1>
	<p class="my-4 flex justify-center">Ta kontakt for en uforpliktende prat!</p>

	<Separator class="mb-8 h-[2px] max-w-24 bg-zinc-800" decorative={true} />

	<div class="flex w-full flex-col gap-12 px-6 md:flex-row">
		<div class="flex flex-col justify-center gap-4 md:w-2/5">
			<img
				src="/assets/logo/logo-black.svg"
				alt="Stefan Pakaski Photography Logo"
				class="mx-auto max-w-80"
			/>
			{#each contactInfo as item}
				<div class="flex items-center justify-center gap-2">
					<div class="w-fit rounded-full bg-zinc-800 p-2 text-xl">
						<svelte:component this={item.icon} class="text-white" />
					</div>
					<span>{item.data}</span>
				</div>
			{/each}
		</div>

		<div class="md:3/5 w-full">
			<ContactForm data={data.form} />
		</div>
	</div>
</Bounded>
