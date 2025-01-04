<script>
	import Hero from '$lib/components/hero.svelte';
	import Bounded from '$lib/components/bounded.svelte';
	import Heading1 from '$lib/components/heading1.svelte';
	import Gallery from '$lib/components/gallery.svelte';
	import Heading2 from '$lib/components/heading2.svelte';
	import Swiper from '$lib/components/swiper.svelte';

	export const images = [
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/6eea2efe-a772-444d-c4a5-3f3e6bf24300/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/77fe11c5-a147-4bc9-0d9a-351320b03f00/Large',
			width: 1920,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/1ff95fc4-0b0c-43a6-4d67-900514583d00/Large',
			width: 853,
			height: 1280
		},

		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/72f10d78-3f10-46b4-c4f5-dd15e6c82600/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/aa5bb380-f2d2-4039-d6f7-f79742cdf900/Large',
			width: 1920,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/796c6b64-a7ed-449c-c024-2c90fcc70f00/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/a0f714f2-c8b4-4c02-c692-863f015b3d00/Large',
			width: 1920,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/6f9d4aa9-77ae-424a-2e1b-d3f75e7ff900/Large',
			width: 853,
			height: 1280
		}
	];
</script>

<Hero
	heading="Fang øyeblikkene som varer evig"
	body="Fra de stille stundene til de store følelsene – vi er der for å forevige deres historie."
/>

<Bounded>
	<Heading1>Bryllupsfotografi</Heading1>
	<p class="pt-6 text-center text-neutral-800">
		Jeg fotograferer bryllup med en blanding av diskret tilstedeværelse og oppstilte portretter. Som
		en 'flue på veggen' fanger jeg de små, uforutsette øyeblikkene som gjør dagen unik, samtidig som
		jeg sørger for vakre, oppstilte portretter som varer i generasjoner. Med base i Moss og Oslo er
		jeg tilgjengelig for oppdrag over hele Norge.
	</p>

	<div class="pt-12">
		<a href="/">
			<img src="/assets/logo/logo-black.svg" alt="Stefan Pakaski Photography Logo" class="h-40" />
		</a>
	</div>
</Bounded>

<Bounded>
	<Heading2>Portefølje</Heading2>
</Bounded>
<Gallery {images} />

<Bounded>
	<a href="/portfolio">
		<button
			type="button"
			class="mb-2 me-2 rounded-full bg-neutral-800 px-5 py-2.5 text-xl font-medium text-white hover:bg-neutral-900 focus:outline-none focus:ring-4 focus:ring-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:ring-neutral-700"
			>Se mer</button
		>
	</a>
</Bounded>

<Swiper />
