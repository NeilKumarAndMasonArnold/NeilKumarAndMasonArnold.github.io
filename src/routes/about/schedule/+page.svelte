<script>
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Timeline from './Timeline.svelte';

	let events = [
		// {
		// 	title: 'Bachelor Party',
		// 	date: 'TBD, 2025 at TBD',
		// 	description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		// },
		// {
		// 	title: 'Bachelorette Party',
		// 	date: 'TBD, 2025 at TBD',
		// 	description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		// },
		{
			// title: 'Haldi Ceremony / Mikveh',
			title: 'Haldi Ceremony',
			date: 'TBD, 2025',
			description: 'The Haldi ceremony is a pre-wedding ritual in Indian culture where a हल्दी (or "haldi"), a paste made from turmeric, is applied to the bride and groom.  This ceremony is believed to bless the couple and bring good fortune.  It also helps in beautifying the skin before the wedding day.'
		},
		{
			title: 'Mehendi Ceremony',
			date: 'TBD, 2025',
			description:
				"A mehendi ceremony is a pre-wedding ritual in many South Asian cultures, particularly in India.  Traditionally, it involves appying intricate henna designs to the bride's hands and feet.  Often held a day or two before the wedding, the ceremony is attended by a smaller cohort of close family and friends.  The mehendi is believed to bring good luck and acts as a symbol of joy and beauty."
		},
		{
			title: 'Wedding Ceremony',
			date: 'TBD on Sunday, August 17th, 2025',
			description: 'The main event where the bride and groom will exchange vows / rings / necklaces and are united in marriage.  This ceremony will blend traditional Indian, Jewish, and Western (christian syncretist) elements, creating a unique and meaningful celebration of love and commitment.'
		},
		{
			title: 'Sangeet / Reception',
			date: 'TBD on Sunday, August 17th, 2025 (date/time is subject to change)',
			description: 'The Sangeet is a joyful pre-wedding celebration involving music, dance, and festivities.  It will be combined with the reception, which is a post-wedding party to celebrate the newlyweds. Guests can expect a night filled with delicious food, energetic performances, and lots of dancing.'
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
