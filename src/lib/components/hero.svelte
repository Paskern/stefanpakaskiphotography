<script>
	let {
		heading = ' ',
		body = ' ',
		image = 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/0bf9a6ea-cf9e-4627-f5c9-353b51915900/w=1920',
		maxHeightLarge = 800,
		maxHeightSmall = 600
	} = $props();

	import { onMount } from 'svelte';

	// Dynamically import GSAP and ScrollTrigger
	onMount(async () => {
		if (typeof window !== 'undefined') {
			const gsapModule = await import('gsap');
			const { ScrollTrigger } = await import('gsap/ScrollTrigger');

			// Register the ScrollTrigger plugin
			gsapModule.gsap.registerPlugin(ScrollTrigger);

			// Parallax effect for the hero image
			gsapModule.gsap.to('.hero-image', {
				y: '75%',
				ease: 'none',
				scrollTrigger: {
					trigger: '.hero-section', // Target the hero section
					start: 'top', // Start immediately when the top of the hero reaches the top of the viewport
					end: 'bottom top', // End when the bottom of the hero reaches the top of the viewport
					scrub: true, // Smooth parallax scrolling
					markers: false // Optional: set to true for debugging
				}
			});
		}
	});
</script>

<section
	class="hero-section relative mx-auto h-[var(--max-height-small)] w-full max-w-[1920px] overflow-hidden lg:h-[var(--max-height-large)]"
	style="--max-height-small: {maxHeightSmall}px;
	--max-height-large: {maxHeightLarge}px;"
>
	<!-- Hero Image -->
	<img
		src={image}
		alt="Fang øyeblikkene som varer evig"
		class="hero-image absolute inset-0 h-full w-full object-cover object-[50%_25%]"
	/>

	<!-- Radial Vignette Overlay -->
	<div
		class="absolute inset-0 h-full w-full"
		style="
            background: radial-gradient(
                ellipse at center,
                rgba(0, 0, 0, 0) 50%,
                rgba(0, 0, 0, 0.3) 60%,
                rgba(0, 0, 0, 1) 100%
            );
        "
	></div>

	<!-- Hero Content -->
	<div
		class="relative z-10 mt-44 flex h-full flex-col items-center justify-center px-4 text-center text-white drop-shadow-2xl"
	>
		<h2 class="text-4xl font-bold drop-shadow-2xl lg:text-6xl">{heading}</h2>
		<p class="mt-4 text-sm drop-shadow-md lg:text-base">
			{body}
		</p>
	</div>
</section>
