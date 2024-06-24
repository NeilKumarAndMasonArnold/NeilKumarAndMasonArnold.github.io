<script>
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import Card from './Card.svelte';
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="wrapper">
	<div>
		<h1 in:fly={{ y: 10, easing: quintOut, duration: 750 }}>About Us</h1>
		<p in:fly={{ y: 10, easing: quintOut, duration: 750 }}>
			This is the story of Mason Arnold and Neil Kumar
		</p>
	</div>

	<div class="card-wrapper">
		
		<Card href="/about/schedule" src="/images/graphical/events.avif" cardNum="1">
			<h3 slot="title">Schedule</h3>
			<p slot="description">A chronological list of events and their cultural significance</p>
		</Card>

		<Card href="/about/venue" src="/images/graphical/venue.avif" cardNum="2">
			<h3 slot="title">Venue</h3>
			<p slot="description">All you need to know about the event locations</p>
		</Card>

		<Card href="/about/music" src="/images/graphical/music.avif" cardNum="3">
			<h3 slot="title">Music</h3>
			<p slot="description">The songs and instrumentals will be played during the festivities</p>
		</Card>

		<Card href="/about/wedding-party" src="images/graphical/party.avif" cardNum="4">
			<h3 slot="title">Wedding Party</h3>
			<p slot="description">The derps that got us here</p>
		</Card>
	</div>
</div>

<style>
	h1,
	h3,
	p {
		color: var(--c-text-main);
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.card-wrapper {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
	}
</style>
