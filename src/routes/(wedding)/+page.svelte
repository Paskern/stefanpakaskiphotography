<script>
	import Hero from '$lib/components/hero.svelte';
	import Bounded from '$lib/components/bounded.svelte';
	import Heading1 from '$lib/components/heading1.svelte';
	import GalleryMini from '$lib/components/GalleryMini.svelte';
	import Heading2 from '$lib/components/heading2.svelte';
	import Swiper from '$lib/components/swiper.svelte';
	import Button from '$lib/components/ui/button/button.svelte';

	export const images = [
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/e4156fe1-8742-4cc3-cc85-3259a11d3800/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/05429d72-5932-4b0b-ae14-505023902e00/Large',
			width: 1920,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/9113f743-cc42-48cb-98f7-3f267e443d00/Large',
			width: 1920,
			height: 1280
		},

		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/05429d72-5932-4b0b-ae14-505023902e00/Large',
			width: 1920,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/e4156fe1-8742-4cc3-cc85-3259a11d3800/public',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/9113f743-cc42-48cb-98f7-3f267e443d00/Large',
			width: 1920,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/e4156fe1-8742-4cc3-cc85-3259a11d3800/Large',
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
<GalleryMini {images} />

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
