<script>
	import Heading2 from './heading2.svelte';
	import Gallery from 'svelte-gallery';

	let { images } = $props();
</script>

<div class="flex w-full justify-center">
	<div class="w-full max-w-[1900px] px-6">
		<Gallery {images} rowHeight="400" gutter="16" />
	</div>
</div>
