<!--
IDK

Author: Neil A. Kumar
Status: ongoing
-->

<script>
	import { cubicOut } from "svelte/easing";

	export let title = 'No description';
	export let date = 'TBD';
	export let index = 1;

	import { fly } from "svelte/transition";

	let flyParams = {
		x: (index % 2 === 0 && window.innerWidth >= 767) ? 25 : -25,
		duration: 400,
		delay: index * 150,
		easing: cubicOut
	}
</script>

<div class="content" in:fly|global={flyParams}>
	<h2 class="title">{title}</h2>
	<h3 class="date">{date}</h3>
	<p><slot /></p>
</div>

<style>
	.content {
		background: var(--c-background-nav);
		padding: 30px;
		position: relative;
		border-radius: var(--event-border-radius);
	}

	.title {
		margin-bottom: 0.5rem;
	}

	.date {
		padding-bottom: 0.5rem;
		border-bottom: 1px solid var(--c-background-active);
		font-weight: var(--fw-normal);
		font-size: var(--fs-semi-large);
	}

	p {
		padding-top: 0.5rem;
		text-align: left;
		text-indent: 2rem;
	}
</style>
