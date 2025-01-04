<script>
	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	import Gallery from 'svelte-gallery';

	export let images;

	const galleryID = 'wedding-gallery';

	onMount(() => {
		const style = document.createElement('style');
		style.textContent = `
			.pswp img {
				cursor: default !important;
			}

			.pswp__container,
			.pswp__scroll-wrap {
				cursor: pointer !important;
			}
		`;
		document.head.appendChild(style);

		const lightbox = new PhotoSwipeLightbox({
			gallery: '#' + galleryID,
			children: 'a', // Anchor tags for the lightbox
			pswpModule: () => import('photoswipe'),
			tapAction: 'close',
			bgOpacity: 0.95
			// imageClickAction: 'next'
		});

		lightbox.init();

		return () => {
			lightbox.destroy();
		};
	});
</script>

<div class="mx-auto max-w-[1900px] px-4">
	<div class="pswp-gallery" id={galleryID}>
		<Gallery {images} rowHeight={550} gutter={14} let:image>
			<a
				href={image.src}
				data-pswp-width={image.width}
				data-pswp-height={image.height}
				target="_blank"
				rel="noreferrer"
			>
				<img src={image.src} alt="Gallery" class="" />
			</a>
		</Gallery>
	</div>
</div>

<style>
	.pswp-gallery img {
		cursor: pointer;
		max-width: 100%;
		transition: transform 0.2s ease;
	}

	.pswp-gallery img:hover {
		transform: scale(1.005);
	}
</style>
