<script>
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import Card from './Card.svelte';

	const aboutPageArray = [
		{
			title: 'Schedule',
			description: 'A chronological list of events and their cultural significance',
			href: "/about/schedule",
			src: "/images/graphical/events.avif"
		},
		{
			title: 'Venu',
			description: 'All you need to know about the event locations',
			href: "/about/venue",
			src: "/images/graphical/venue.avif"
		},
		{
			title: 'Music',
			description: 'The songs and instrumentals that will be played during the festivities',
			href: "/about/music",
			src: "/images/graphical/music.avif"
		},
		{
			title: 'Wedding Party',
			description: 'The derps that got us here',
			href: "/about/wedding-party",
			src: "/images/graphical/party.avif"
		}
	];
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
		{#each aboutPageArray as {title, description, href, src}, index}
			<Card {href} {src} cardNum={index + 1}>
				<h3 slot="title">{title}</h3>
				<p slot="description">{description}</p>
			</Card>
		{/each}
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
