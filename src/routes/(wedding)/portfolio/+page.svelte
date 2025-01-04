<script>
	import Gallery from '$lib/components/gallery.svelte';
	import Bounded from '$lib/components/bounded.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Heading1 from '$lib/components/heading1.svelte';

	export const images = [
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/1ff95fc4-0b0c-43a6-4d67-900514583d00/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/2e9b5303-2c59-4253-3b65-05fd181fd100/Large',
			width: 1920,
			height: 922
		},

		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/72f10d78-3f10-46b4-c4f5-dd15e6c82600/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/60bed943-069f-4f2e-7f2f-607b7ba55c00/Large',
			width: 853,
			height: 1280
		},

		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/0d96d099-3fb2-4fe1-a6c6-8621e2891800/Large',
			width: 1920,
			height: 1280
		},

		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/c6206e49-07e8-4c35-3cfe-0ab5045f2800/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/796c6b64-a7ed-449c-c024-2c90fcc70f00/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/60c1f570-5699-49f7-c770-8670face8200/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/aa5bb380-f2d2-4039-d6f7-f79742cdf900/Large',
			width: 1920,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/44171da1-3573-434c-e94c-1986672e5a00/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/314f23ab-c50f-450d-3f37-94f8b88b7200/Large',
			width: 853,
			height: 1280
		},

		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/52c5595f-df3b-4a4e-e8ae-a4bfc8016600/Large',
			width: 853,
			height: 1280
		},

		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/c1618531-eaf2-4e2e-2df4-51716c3c5300/Large',
			width: 1920,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/fee3ed2d-e5fb-4e20-3602-fd633d047c00/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/6eea2efe-a772-444d-c4a5-3f3e6bf24300/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/3f0c8d5c-23a7-4d72-5752-1a670b192c00/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/536957bc-8820-4273-b3e8-d96f07a85e00/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/363718ea-4a97-47a8-21de-788d5a725c00/Large',
			width: 1920,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/bdb5cba8-89a6-4e16-0885-b8c0b2120c00/Large',
			width: 1920,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/5ecababa-bf7f-4d97-201a-b43638170000/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/42722120-bb2e-4a25-fa31-29e6c259d800/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/bb225c31-12fb-4e8b-34b3-e4f3c4f74f00/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/fa7f7fe7-fcec-4702-8cb7-29be2cca0700/Large',
			width: 853,
			height: 1280
		},

		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/31b505f9-31ab-4112-a3e7-e07038ebd800/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/15e55d42-cc58-4ae7-67ea-d8e68004b700/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/51e323f2-bee3-4048-b52e-f6b811ef4c00/Large',
			width: 1920,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/8b092ea7-b73d-4d35-1248-421f8691a700/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/21462f4f-d4c2-4891-3da9-5127b16ad300/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/627d23f8-3425-4d92-b82a-fc948f458700/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/c41c0f23-6b8b-43c7-62c1-f0e096c32a00/Large',
			width: 1920,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/26fd910f-ab5d-492d-8971-9fdd0eb67300/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/06342c7c-02ec-4a96-61f0-1830e48a3c00/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/8009b299-5c51-4636-a5bd-4a96032dff00/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/ea8b6fdb-6ad6-46b2-25d6-81ce9aa4b500/Large',
			width: 1920,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/18a86048-1204-4491-e441-e9aa6ad75100/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/77fe11c5-a147-4bc9-0d9a-351320b03f00/Large',
			width: 1920,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/4b634054-4570-4315-62d8-5f70b7caf500/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/3415d207-88af-4a71-ba57-5b90fce06100/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/307c5aaf-aefe-4b41-eb67-74c2eeab9d00/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/a332647e-4896-4211-4252-467aca574d00/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/f9ef8a3c-6c5c-4bef-bd28-67b312d0b000/Large',
			width: 1920,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/583addf3-3bb4-4afb-66c4-0510e9e84200/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/6f9d4aa9-77ae-424a-2e1b-d3f75e7ff900/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/90965de0-7dbc-4313-1efa-60f14c4f7300/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/c716446d-3d47-414f-6c33-a91512d4be00/Large',
			width: 853,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/a4fa7c51-6b92-40da-3e24-3555c3c9ea00/Large',
			width: 1920,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/a0f714f2-c8b4-4c02-c692-863f015b3d00/Large',
			width: 1920,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/d936a4b8-926b-4975-9af8-84f15376ab00/Large',
			width: 1920,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/13a9c5b9-f0cc-4ab2-ff36-5dc571b63800/Large',
			width: 1920,
			height: 1280
		},
		{
			src: 'https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/afffd038-ed05-4b1f-9403-8aec5a53e100/Large',
			width: 1920,
			height: 1280
		}
	];
</script>

<Hero
	image="https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/13a9c5b9-f0cc-4ab2-ff36-5dc571b63800/Large"
	maxHeightLarge={800}
	maxHeightSmall={600}
/>

<Bounded>
	<Heading1>Portefølje</Heading1>
</Bounded>

<Gallery {images} />
