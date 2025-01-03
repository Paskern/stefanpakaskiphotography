<script>
	export let saleEndDate;
	import HugeiconsDiscount from '~icons/hugeicons/discount';
</script>

<div class="mt-6 text-center">
	<div
		class="inline-flex h-20 items-center justify-center rounded-full bg-neutral-900 px-6 text-white shadow-lg"
	>
		<HugeiconsDiscount class="text-white-500 mr-3 h-8 w-8" />
		<p class="text-sm font-medium sm:text-lg">
			* Tilbudet gjelder <span class="font-semibold underline underline-offset-2">to</span>
			første bestillinger innen
			<span class="font-bold">{saleEndDate}</span>
		</p>
	</div>
</div>
