<script>
	import Bounded from '$lib/components/bounded.svelte';
	import Heading2 from '$lib/components/heading2.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Swiper from '$lib/components/swiper.svelte';
	import { Separator } from '$lib/components/ui/separator';
</script>

<scirpt> </scirpt>

<Hero />

<Bounded>
	<div class="md:flex">
		<div class="md:w-1/2">
			<h2 class="mb-2 text-xs font-medium uppercase tracking-widest text-gray-700 md:text-sm">
				La oss begynne med...
			</h2>
			<h1 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Hvem er jeg?</h1>
			<p class="leading-relaxed text-gray-600">
				Hei! Jeg heter Stefan Pakaski og det er jeg som er personen bak kameraet. Selvom jeg er
				utdannet dataingeniør, har jeg alltid hatt en brennende lidenskap for fotografi, videografi
				og redigering så lenge jeg kan huske. Allerede på barneskolen begynte jeg å utforske
				Photoshop, hvor jeg lekte meg med bilder av fotballidolene mine.
			</p>
			<p class="mt-4 leading-relaxed text-gray-600">
				Jeg trives spesielt godt med bryllupsfotografering – det er noe helt eget ved å ta del i en
				av største dagene i livet til andre mennesker. Jeg tar meg ofte i å smile mens jeg redigerer
				bryllupsbilder, og gleden jeg ser i motivene gir meg energi. For meg er et godt bilde noe
				som fanger følelsene bak motivet, enten gleden i et genuint smil eller roen i et vakkert
				landskap.
			</p>
		</div>
		<div class="my-8 flex items-center justify-center md:mb-0 md:w-1/2">
			<img
				src="https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/72a494e1-c268-42be-c954-eca89a386500/w=600"
				alt="Stefan Pakaski"
				class="h-64 w-64 rounded-full border-4 border-neutral-200 object-cover shadow-lg md:h-72 md:w-72"
			/>
		</div>
	</div>

	<div class="pt-12 md:pt-16">
		<h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
			Klare til å forevige deres store dag?
		</h2>
	</div>
	<a href="/contact">
		<button
			type="button"
			class="my-6 mb-12 me-2 rounded-full bg-neutral-800 px-5 py-2.5 text-xl font-medium text-white hover:bg-neutral-900 focus:outline-none focus:ring-4 focus:ring-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:ring-neutral-700"
			>Book fotografering</button
		>
	</a>
</Bounded>

<Swiper />
