<script>
	import Bounded from '$lib/components/bounded.svelte';
	import Heading1 from '$lib/components/heading1.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Prices from '$lib/components/prices.svelte';
	import Sale from '$lib/components/sale.svelte';
	import Swiper from '$lib/components/swiper.svelte';
</script>

<Hero
	image="https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/2e9b5303-2c59-4253-3b65-05fd181fd100/Large"
/>

<Bounded>
	<Heading1>Priser</Heading1>
	<Prices />
	<Sale saleEndDate="31. januar 2025" />
</Bounded>

<Swiper />
