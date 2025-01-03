<script>
	const steps = [
		{
			title: 'Kontakt',
			icon: '📞',
			description:
				'Fyll ut vårt kontaktskjema, eller send oss en e-post. Vi svarer raskt for å sikre at din dato er tilgjengelig!'
		},
		{
			title: 'Pre-Møte',
			icon: '🤝',
			description:
				'Vi avtaler et uforpliktende møte for å bli kjent og diskutere deres behov og ønsker for dagen.'
		},
		{
			title: 'Signering og Betaling',
			icon: '📝',
			description: 'Reservér datoen med en signert kontrakt og betaling av bookingavgiften.'
		},
		{
			title: 'Planleggingsmøte',
			icon: '🗓️',
			description:
				'2-4 uker før bryllupet møtes vi igjen for å gå gjennom tidsplan, detaljer og spesifikke ønsker.'
		},
		{
			title: 'Den Store Dagen',
			icon: '📷',
			description:
				'Vi dokumenterer dagen deres med lidenskap og profesjonalitet, fra forberedelser til siste dans.'
		},
		{
			title: 'Levering av Bilder',
			icon: '📦',
			description:
				'Innen 4-6 uker leveres deres nøye redigerte bildegalleri via en eksklusiv nettportal.'
		}
	];
</script>

<section class="bg-gradient-to-b from-white via-gray-100 to-gray-200 px-8 py-16">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-8 text-center text-4xl font-bold text-gray-800">Slik Booker du Oss</h2>
		<p class="mb-12 text-center text-lg text-gray-600">
			Vi har gjort prosessen enkel og strukturert, slik at dere kan fokusere på å nyte bryllupsdagen
			deres!
		</p>

		<div class="relative">
			<div class="absolute left-4 h-full w-1 bg-gradient-to-b from-gray-300 to-gray-500"></div>

			{#each steps as step, i}
				<div class="relative mb-12 pl-12">
					<div
						class="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white text-2xl"
					>
						{step.icon}
					</div>
					<h3 class="mb-2 text-2xl font-semibold text-gray-700">{step.title}</h3>
					<p class="text-gray-600">{step.description}</p>
					{#if i < steps.length - 1}
						<div class="ml-4 mt-6 h-12 border-l-4 border-dotted border-gray-300"></div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
