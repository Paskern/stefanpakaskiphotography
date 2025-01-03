<script lang="ts">
	import Bounded from '$lib/components/bounded.svelte';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Autoplay from 'embla-carousel-autoplay';
	import Heading2 from '$lib/components/heading2.svelte';

	// Array of reviews
	const reviews = [
		{
			image:
				'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/7ff7d747-9289-4caa-c29a-16c672c2d600/w=208',
			quote:
				'"Imøtekommende fotograf, som gjorde samarbeidet lett og fint. Stefan bidro til avslappet stemning på selve dagen og sørget for at det ble mer komfortabelt foran kamera. Det var enkelt å kommunisere både i forkant av bryllupet, på bryllupsdagen og i etterkant. Han skled rett inn i omgivelsene under middagen og vi merket knapt at han var der. Det tok ikke lang tid før vi fikk bildene og vi er veldig fornøyd med opplevelsen og det ferdig resultatet. Vi anbefaler sterkt å velge han til å forevige den store dagen."',
			name: '- Helene & Nicolai'
		},
		{
			image:
				'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/bd370e19-5a1e-4c04-2bbd-9d327f8d3900/w=208',
			quote:
				'"Vi er kjempe glade for at vi valgte å ha Stefan med på laget på den store dagen vår. Han tok bilder i vielsen, velkomst, middag og dansegulv. Han var diskret, profesjonell og tok kjempe kjempefine bilder av oss og alle gjestene våre. Han fanget så mange verdifulle øyeblikk. Gjestene våre opplevde han også som utrolig hyggelig. Stefan var også lett å kommunisere med og opptatt at det som var viktig for oss, som gjorde det hele bedre. Tusen takk Stefan, vi er kjempe fornøyd."',
			name: '- Karoline & Tor Erlend'
		}
	];
</script>

<Bounded>
	<Heading2 class=" ">Tilbakemeldinger</Heading2>
	<div class="relative mx-auto w-full max-w-2xl px-4 text-center lg:max-w-4xl">
		<Carousel.Root
			opts={{
				align: 'start',
				loop: true
			}}
			plugins={[
				Autoplay({
					delay: 6000,
					stopOnMouseEnter: true
				})
			]}
			class="relative mx-auto"
		>
			<Carousel.Content>
				{#each reviews as review}
					<Carousel.Item>
						<div>
							<div
								class="mx-auto my-6 h-52 w-52 overflow-hidden rounded-full border-4 border-neutral-200"
							>
								<img src={review.image} alt="client" />
							</div>
							<p class="mb-4 text-base italic text-neutral-700">{review.quote}</p>
							<h4 class="text-center text-xl font-semibold text-neutral-900">{review.name}</h4>
						</div>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
			<div
				class="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform lg:left-0 lg:-translate-x-full"
			>
				<Carousel.Previous class="text-neutral-600 hover:text-neutral-900 focus:outline-none" />
			</div>
			<div
				class="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform lg:right-0 lg:translate-x-full"
			>
				<Carousel.Next class="text-neutral-600 hover:text-neutral-900 focus:outline-none" />
			</div>
		</Carousel.Root>
	</div>
</Bounded>
