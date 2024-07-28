<script>
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Timeline from './Timeline.svelte';

	let events = [
		// {
		// 	title: 'Bachelor Party',
		// 	date: 'TBD, 2025',
		// 	description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		// },
		// {
		// 	title: 'Bachelorette Party',
		// 	date: 'TBD, 2025',
		// 	description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		// },
		{
			// title: 'Haldi Ceremony / Mikveh',
			title: 'Haldi Ceremony',
			date: 'TBD, 2025',
			description: 'lorem ipsum dolor sit amet, consecteture adipiscing elit.'
		},
		{
			title: 'Mehendi Ceremony',
			date: 'TBD, 2025',
			description:
				"A mehendi ceremony is a pre-wedding ritual in many South Asian cultures, particularly in India.  Traditionally, it involves appying intricate henna designs to the bride's hands and feet.  Often held a day or two before the wedding, the ceremony is attended by a smaller cohort of close family and friends.  The mehendi is believed to bring good luck and acts as a symbol of joy and beauty."
		},
		{
			title: 'Wedding Ceremony',
			date: 'August 17th, 2025',
			description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			title: 'Sangeet / Reception',
			date: 'TBD, 2025',
			description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		}
	];
</script>

<div class="wrapper">
	<h1 in:fly={{ y: 25, duration: 400, easing: quintOut }}>Schedule</h1>

	<Timeline {events} />
</div>

<style>
	.wrapper {
		display: flex;
		width: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	h1,
	p {
		color: var(--c-text-main);
	}
</style>
