<script>
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { onDestroy, onMount } from 'svelte';
	import { imageLibrary } from '$lib';
	import GalleryImage from './GalleryImage.svelte';

	let columnsCount;
	let columns = [];
	let originalImageArray = [...imageLibrary];
	let shuffledImageArray = [];

	onMount(() => {
		adjustColumnCount();
		initializeColumns();
		shuffledImageArray = smartshuffle(originalImageArray);
		distributeImages();

		window.addEventListener('resize', handleResize);
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('resize', handleResize);
		}
	});

	function handleResize() {
		const previousColumnsCount = columnsCount;
		adjustColumnCount();

		if (previousColumnsCount !== columnsCount) {
			initializeColumns();
			distributeImages();
		}
	}

	function adjustColumnCount() {
		if (window.innerWidth < 550) {
			columnsCount = 1;
		} else if (window.innerWidth < 767) {
			columnsCount = 2;
		} else if (window.innerWidth < 1150) {
			columnsCount = 3;
		} else if (window.innerWidth < 1700) {
			columnsCount = 4;
		} else {
			columnsCount = 5;
		}
	}

	function initializeColumns() {
		columns = Array(columnsCount).fill(null).map(() => []);
	}

	function distributeImages() {
		shuffledImageArray.forEach((image, i) => {
			columns[i % columnsCount].push(image);
		});
	}

	function shuffle(array) {
		for (let i = array.length -1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return(array);
	}

	function smartshuffle(array) {
		let pinnedImages = array.filter(element => element.pin);
		let remainingImages = array.filter(element => !element.pin);

		pinnedImages = shuffle(pinnedImages);
		remainingImages = shuffle(remainingImages);

		return [...pinnedImages, ...remainingImages];
	}
</script>

<div class="wrapper">
	<h1 in:fly={{ y: 10, easing: quintOut, duration: 750 }}>Gallery</h1>

	<div class="masonry-container">
		{#each columns as column, colIndex}
			<div class="column">
				{#each column as thisImage, index}
					<GalleryImage {index} {colIndex} {columnsCount} {thisImage} />
				{/each}
			</div>
		{/each}
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.masonry-container {
		display: grid;
		grid-gap: 2rem;
	}

	.column {
		display: flex;
		flex-direction: column;
	}

	@media (min-width: 550px) {
		.masonry-container {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 767px) {
		.masonry-container {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (min-width: 1150px) {
		.masonry-container {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	@media (min-width: 1700px) {
		.masonry-container {
			grid-template-columns: repeat(5, 1fr);
		}
	}
</style>