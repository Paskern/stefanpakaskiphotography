<script lang="ts">
	import Analytics from '$lib/components/analytics.svelte';
	// Import fonts
	import '@fontsource-variable/montserrat';
	import '@fontsource-variable/bodoni-moda';
	import '@fontsource-variable/nunito';
	import { Toaster } from '$lib/components/ui/sonner/index';

	import '$src/app.css';

	let { children } = $props();

	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<Analytics />

<div class="flex min-h-screen flex-col">
	<Header />

	<Toaster richColors closeButton />

	<main class="flex-grow">
		{@render children()}
	</main>
	<Footer />
</div>
