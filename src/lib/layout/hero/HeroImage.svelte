<!--
Hero Image Component (HeroImage.svelte)
Renders the hero image responsively.

Author: Neil A. Kumar
Status: Ongoing
-->
<script>
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let darkImage, lightImage;

	onMount(() => {
		const updateImageVisibility = () => {
			const isDarkMode = document.body.classList.contains('dark-theme');
			darkImage.style.opacity = isDarkMode ? '1' : '0';
			lightImage.style.opacity = isDarkMode ? '0' : '1';
		};

		updateImageVisibility();

		const observer = new MutationObserver(updateImageVisibility);
		observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

		return () => {
			observer.disconnect();
		};
	});
</script>

<div class="hero-image" in:fly={{ x: 20, easing: quintOut, duration: 750 }}>
	<img
		bind:this={darkImage}
		src="/images/NeilAndMasonByRileyArnold_DarkMode.jpg"
		alt="Digital artwork in dark mode"
	/>
	<img
		bind:this={lightImage}
		src="/images/NeilAndMasonByRileyArnold.jpg"
		alt="Digital artwork in light mode"
	/>
</div>

<style>
	div.hero-image {
		height: 70rem;
		width: 22rem;
		max-height: 50vh;
		max-width: 90vw;
		position: relative;
		top: auto;
		right: auto;
		padding: 0.5rem;
		float: right;
		overflow: hidden;
		user-select: none;
		z-index: -1;
	}

	div.hero-image img {
		height: 100%;
		width: 100%;
		max-height: 100%;
		border-radius: 20px;
		position: absolute;
		top: 0;
		left: 0;
		object-fit: cover;
		object-position: center;
	}

	@media (min-width: 1700px) {
		div.hero-image {
			height: 70vh;
			width: 30vw;
            max-height: 70rem;
			z-index: -1;
		}
	}
</style>
