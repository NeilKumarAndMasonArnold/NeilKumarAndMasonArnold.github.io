<script>
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import Card from './Card.svelte';
</script>

<div class="wrapper">
	<h1 in:fly={{ y: 10, easing: quintOut, duration: 750 }}>About Us</h1>
	<p in:fly={{ y: 10, easing: quintOut, duration: 750 }}>
		This is the story of Mason Arnold and Neil Kumar
	</p>

	<div class="card-wrapper">
		<Card href="/about/music" src="/images/graphical/music.jpg" cardNum="1">
			<h3 slot="title">Music</h3>
			<p slot="description">The songs and instrumentals will be played during the festivities</p>
		</Card>

		<Card href="/about/schedule" src="/images/graphical/events.jpg" cardNum="2">
			<h3 slot="title">Schedule</h3>
			<p slot="description">A chronological list of events with their cultural significance</p>
		</Card>

		<Card href="/about/venue" src="/images/graphical/venue.jpg" cardNum="3">
			<h3 slot="title">Venue</h3>
			<p slot="description">All you need to know about the event locations</p>
		</Card>

		<Card href="/about/wedding-party" src="images/graphical/party.jpg" cardNum="4">
			<h3 slot="title">Wedding Party</h3>
			<p slot="description">The derps that got us here</p>
		</Card>
	</div>
</div>

<style>
	h1,
	p {
		color: var(--c-text-main);
	}

	.card-wrapper {
		width: 80vw;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
	}
</style>
