<script lang="ts">
	import { links } from '$lib/config';
	import InstagramIcon from '~icons/ph/instagram-logo-bold';
	import Bounded from '$lib/components/bounded.svelte';
</script>

<footer>
	<Bounded>
		<a href="/">
			<img src="/assets/logo/logo-black.svg" alt="Stefan Pakaski Photography Logo" class="h-40" />
		</a>

		<a href="https://www.instagram.com/stefanpakaskiphotography/" class="py-2">
			<InstagramIcon class="h-8 w-8 text-neutral-800 hover:text-neutral-900" />
		</a>

		<nav class="mt-8 grid grid-cols-2 gap-x-10 gap-y-4 text-center">
			{#each links as link}
				<a
					href={link.href}
					class="text-natural-700 hover:text-natural-900 block px-4 py-2 hover:underline hover:underline-offset-4"
				>
					{link.text.toUpperCase()}
				</a>
			{/each}
		</nav>
	</Bounded>
	<div
		class="border-t border-neutral-300 bg-neutral-900 py-6 pt-6 text-center text-sm text-neutral-400"
	>
		<p>
			&copy; {new Date().getFullYear()} Stefan Pakaski Photography.
		</p>
		<p>Org. nr: 833770802 - BY PAKASKI</p>
	</div>
</footer>
