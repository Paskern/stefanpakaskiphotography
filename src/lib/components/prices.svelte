<script>
	import { Button } from '$lib/components/ui/button';
	import MaterialSymbolsLightCheckCircleOutline from '~icons/material-symbols-light/check-circle-outline';
	import Ribbon from '$lib/components/ribbon.svelte';

	let items = [
		{
			title: '💎 DIAMANT 💎',
			description: [
				'12 timer fotografering',
				'500+ redigerte bilder',
				'Planleggingsmøte',
				'Forlovelsesfotografering',
				'Rabatt på album'
			],
			price: '15 000 kr*',
			image:
				'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/6eea2efe-a772-444d-c4a5-3f3e6bf24300/w=800',
			sale: {
				ribbonText: 'SPAR 40%',
				oldPrice: '25 000 kr'
			}
		},
		{
			title: '🏅 GULL 🏅',
			description: [
				'6 timer fotografering',
				'200+ redigerte bilder',
				'Planleggingsmøte',
				'Rabatt på forlovelsesfotografering'
			],
			price: '14 000 kr*',
			image:
				'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/a0f714f2-c8b4-4c02-c692-863f015b3d00/w=1000',
			sale: {
				ribbonText: 'SPAR 30%',
				oldPrice: '20 000 kr'
			}
		},
		{
			title: '🥈 SØLV 🥈',
			description: ['3 timer fotografering', '25-50 redigerte bilder', 'Planleggingsmøte'],
			price: '12 000 kr*',
			image:
				'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/1ff95fc4-0b0c-43a6-4d67-900514583d00/w=800',
			sale: {
				ribbonText: 'SPAR 20%',
				oldPrice: '15 000 kr'
			}
		}
	];
</script>

<div
	class="max-w-8xl mt-8 grid grid-rows-[auto_auto_auto_auto_auto] gap-4 md:grid-cols-2 md:gap-7 lg:grid-cols-3"
>
	{#each items as item}
		<div
			class="relative row-span-5 grid grid-rows-subgrid overflow-hidden rounded-lg bg-white shadow-lg"
		>
			{#if item.sale}
				<Ribbon text={item.sale.ribbonText} />
			{/if}
			<img src={item.image} alt={item.title} class="h-96 w-full object-cover" />
			<div class="flex items-center justify-center text-2xl font-bold text-neutral-900">
				{item.title}
			</div>
			<div class="space-y-2 px-6">
				{#each item.description as desc}
					<div class="flex items-center gap-3">
						<MaterialSymbolsLightCheckCircleOutline
							class="h-5 w-5 flex-shrink-0 text-green-700 sm:h-6 sm:w-6"
						/>
						<p class="text-left text-sm text-gray-700 sm:text-base">
							{desc}
						</p>
					</div>
				{/each}
			</div>
			<div class="flex flex-col items-center justify-center">
				{#if item.sale}
					<p class="max-w-full truncate pb-1 text-sm text-gray-400 line-through sm:text-lg">
						{item.sale.oldPrice}
					</p>
				{/if}
				<p
					class="max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-center text-xl font-bold text-gray-800 sm:text-xl md:text-2xl"
				>
					{item.price}
				</p>
				<p class="text-sm text-gray-500">inkl. mva.</p>
			</div>
			<div class="flex justify-center pb-4">
				<Button
					href="/contact"
					class="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-neutral-700 focus:outline-none focus:ring focus:ring-neutral-500 sm:text-base md:px-6 md:py-3 md:text-lg"
				>
					Se mer og bestill
				</Button>
			</div>
		</div>
	{/each}
</div>
