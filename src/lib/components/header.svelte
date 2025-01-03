<script lang="ts">
	import IconMenu from '~icons/ph/list';
	import IconX from '~icons/ph/x';
	import { links } from '$lib/config';
	import clsx from 'clsx';

	let isMenuOpen = false;
	let showHeader = true; // Determines if the header should be visible
	let lastScrollY = 0; // Tracks the last scroll position

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	// Scroll event listener to toggle header visibility
	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', () => {
			if (!isMenuOpen) {
				const currentScrollY = window.scrollY;
				showHeader = currentScrollY < lastScrollY || currentScrollY <= 300;
				lastScrollY = currentScrollY;
			}
		});
	}
</script>

<header
	class={clsx(
		'fixed left-0 top-0 z-50 w-full transition-transform duration-500',
		showHeader || isMenuOpen ? 'translate-y-0' : '-translate-y-full',
		isMenuOpen ? 'backdrop-blur-none' : ''
	)}
>
	<!-- Header Content with Gradient and Mask -->
	<div
		class={clsx(
			'bg-gradient-to-b from-black/95 to-transparent transition-all duration-300',
			isMenuOpen ? 'border-b-2 border-neutral-500 bg-black/40 backdrop-blur-sm' : ''
		)}
		style={isMenuOpen
			? ''
			: 'backdrop-filter: blur(3px); -webkit-mask: linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%); mask: linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)'}
	>
		<div class="flex items-center justify-between px-4 py-4 lg:px-8">
			<!-- Logo small screen -->
			<div class="flex lg:hidden">
				<a href="/">
					<img
						src="/assets/logo/logo-white.svg"
						alt="Stefan Pakaski Photography logo"
						class="h-24 w-auto lg:h-28"
					/>
				</a>
			</div>

			<!-- Desktop navigation with logo centered -->
			<nav class="hidden w-full items-center lg:flex">
				<!-- Left links -->
				<div class="flex flex-1 justify-end gap-x-6">
					{#each links.slice(0, links.length / 2) as link}
						<a
							href={link.href}
							class="text-white hover:text-gray-300 hover:underline hover:underline-offset-4"
						>
							{link.text.toUpperCase()}
						</a>
					{/each}
				</div>

				<!-- Centered logo -->
				<div class="mx-8 flex-shrink-0">
					<a href="/">
						<img
							src="/assets/logo/logo-white.svg"
							alt="Stefan Pakaski Photography logo"
							class="h-32 w-auto"
						/>
					</a>
				</div>

				<!-- Right links -->
				<div class="flex flex-1 justify-start gap-x-6">
					{#each links.slice(links.length / 2) as link}
						<a
							href={link.href}
							class="text-white hover:text-gray-300 hover:underline hover:underline-offset-4"
						>
							{link.text.toUpperCase()}
						</a>
					{/each}
				</div>
			</nav>

			<!-- Mobile Menu Button -->
			<button
				class="flex items-center text-white hover:text-gray-300 lg:hidden"
				on:click={toggleMenu}
				aria-label="Toggle Menu"
			>
				{#if isMenuOpen}
					<IconX class="h-8 w-8" />
				{:else}
					<IconMenu class="h-8 w-8" />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile menu dropdown -->
	<div
		class={clsx(
			'absolute left-0 top-full flex w-full flex-col items-center bg-black/40 py-4 shadow-lg backdrop-blur-sm transition-transform duration-500 ease-in-out lg:hidden',
			isMenuOpen ? 'translate-y-0' : 'translate-y-[-150%]'
		)}
	>
		{#each links as link}
			<a
				href={link.href}
				class="block w-full px-4 py-3 text-center text-white hover:text-neutral-300"
				on:click={toggleMenu}
			>
				{link.text.toUpperCase()}
			</a>
		{/each}
	</div>
</header>
