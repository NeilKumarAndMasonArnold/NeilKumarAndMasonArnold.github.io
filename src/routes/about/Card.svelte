<!--
Card Link Component (Card.svelte)
Renders a card with an image and description that can also act as a link

Author: Neil A. Kumar
Status: Ongoing
-->

<script>
	export let href = '';
	export let src = '';
	export let cardNum;

	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

<a {href} in:fly={{ y: 10, easing: quintOut, duration: 750, delay: cardNum * 100 }}>
	<img {src} alt="A graphical component" />
	<div>
		<slot name="title" />
		<slot name="description" />
	</div>
</a>

<style>
	a {
		width: 20rem;
		border-radius: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		color: var(--c-text-main);
		background: var(--c-background-nav);
		text-decoration: none;
		box-shadow: 0 9.3905074804px 15px var(--c-shadow-gallery);
	}

	img {
		width: 100%;
		max-width: 100%;
		border-radius: 20px 20px 0 0;
		object-fit: cover;
		display: block;
	}

	div {
		padding: 1.5rem;
        height: 100%;
		text-align: center;
	}
</style>
