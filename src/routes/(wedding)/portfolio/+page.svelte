<script>
	import Gallery from '$lib/components/gallery.svelte';
	import Bounded from '$lib/components/bounded.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Heading1 from '$lib/components/heading1.svelte';

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
	image="https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/9113f743-cc42-48cb-98f7-3f267e443d00/Large"
	maxHeightLarge={800}
	maxHeightSmall={600}
/>

<Bounded>
	<Heading1>Portefølje</Heading1>
</Bounded>

<Gallery {images} />
