<script>
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

<svelte:head>
	<title>RSVP</title>
</svelte:head>

<div class="wrapper" in:fly={{ y: 10, easing: quintOut, duration: 750 }}>
	<h1>RSVP</h1>
	<p>Coming Soon!</p>
</div>

<style>
	h1, p {
		color: var(--c-text-main);
	}
</style>