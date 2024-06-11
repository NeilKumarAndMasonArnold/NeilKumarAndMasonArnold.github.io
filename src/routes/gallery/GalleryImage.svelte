<!--
Gallery Image Component (GalleryImage.svelte)
Renders an image with expandable meta-data for the image gallery page.

Author: Neil A. Kumar (2024)
Status: Okay
-->

<script>
	export let colIndex;
	export let columnsCount;
	export let index;
	export let thisImage;

	import { fly } from 'svelte/transition';
	import { iconLibrary } from '$lib';
	import { quintOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	import Icon from '$lib/components/Icon.svelte';

	let expanded = false;
	let userOverride = false;
	let blurTimeout;

	const getDelay = (index, column) => {
		return column * 100 + index * columnsCount * 100;
	};

	const blurHandler = () => {
		if (!userOverride) {
			blurTimeout = setTimeout(() => {
				expanded = false;
			}, 150);
		}
	};

	const focusHandler = () => {
		if (!userOverride) {
			clearTimeout(blurTimeout);
			expanded = true;
		}
	};

	const clickHandler = () => {
		if (userOverride) {
			expanded = !expanded;
			userOverride = false;
		} else if (!userOverride) {
			// Replacing the following with "expanded=!expanded" results in it
			// not working... idk why.
			if (expanded) {
				expanded = false;
			}
			if (!expanded) {
				expanded = true;
			}
			userOverride = true;
		}
	};
</script>

<div
	in:fly|global={{ y: 50, duration: 1000, delay: getDelay(index, colIndex), easing: quintOut }}
	role="button"
	tabindex="0"
	aria-label="Toggle Image Info"
	aria-expanded={expanded}
	class="image-card"
	class:closed={!expanded}
	on:mouseover={focusHandler}
	on:mouseout={blurHandler}
	on:focus={focusHandler}
	on:blur={blurHandler}
	on:click={clickHandler}
	on:keydown={(e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			{
				clickHandler;
			}
		}
	}}
>
	<img src={thisImage.src} alt={thisImage.alt} class:expanded />

	{#if expanded}
		<div class="image-meta" transition:slide={{ easing: quintOut, duration: 500 }}>
			<h4>{thisImage.title}</h4>
			<p class="creator">
				{#if thisImage.type}
					<Icon
						path={iconLibrary[thisImage.type].path}
						viewBox={iconLibrary[thisImage.type].viewBox}
						fill="var(--c-text-nav)"
						width="1rem"
						height="1rem"
					/>
				{/if}
				<i>{thisImage.creator}</i>
			</p>
			<p>{thisImage.description}</p>
		</div>
	{/if}
</div>

<style>
	.image-card {
		width: 100%;
		border-radius: 20px;
		margin-bottom: 2rem;
		background: var(--c-background-nav);
		box-shadow: 0 9.3905074804px 15px var(--c-shadow-gallery);
	}

	.image-card .image-meta {
		padding: 1rem;
	}

	.image-card .image-meta h4,
	.image-card .image-meta p {
		text-align: center;
	}

	.image-card .image-meta .creator {
		margin-bottom: 1rem;
	}

	.image-card .expanded {
		border-radius: 20px 20px 0 0;
	}

	.image-card img {
		width: 100%;
		max-width: 100%;
		border-radius: 20px;
		object-fit: cover;
		display: block;
	}
</style>
