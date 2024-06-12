<script>
	import PartyMember from './PartyMember.svelte';
	import PartySwitcher from './PartySwitcher.svelte';

	import { onMount, onDestroy } from 'svelte';
	import { partyMembers, selectedParty } from '$lib';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let isInitialized = false;
	let columnsCount;
	let columns = [];
	let originalPartyMembers = [...partyMembers];
	let shuffledPartyMembers = [];

	onMount(() => {
		adjustColumnCount();
		initializeColumns();

		window.addEventListener('resize', handleResize);
		isInitialized = true;
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('resize', handleResize);
		}
	});

	function handleResize() {
		const previousColumnsCount = columnsCount;
		adjustColumnCount();

		if (previousColumnsCount !== columnsCount) {
			distributeMembers();
		}
	}

	function adjustColumnCount() {
		if (window.innerWidth < 767) {
			columnsCount = 1;
		} else if (window.innerWidth < 1150) {
			columnsCount = 2;
		} else if (window.innerWidth < 1700) {
			columnsCount = 3;
		} else {
			columnsCount = 4;
		}
	}

	function initializeColumns() {
		columns = Array(columnsCount)
			.fill(null)
			.map(() => []);
	}

	function distributeMembers() {
		initializeColumns();
		shuffledPartyMembers.forEach((image, i) => {
			columns[i % columnsCount].push(image);
		});
	}

	function shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	function smartshuffle(array) {
		let honorsMembers = array.filter((element) => element.honor);
		let remainingMembers = array.filter((element) => !element.honor);

		honorsMembers = shuffle(honorsMembers);
		remainingMembers = shuffle(remainingMembers);

		let unfilteredMemberArray = [...honorsMembers, ...remainingMembers];
		let selectedMembers = [];

		if ($selectedParty === 'bride') {
			selectedMembers = unfilteredMemberArray.filter((element) => element.party === 'Bridal');
		} else if ($selectedParty === 'groom') {
			selectedMembers = unfilteredMemberArray.filter((element) => element.party === 'Grooms');
		} else {
			selectedMembers = [...unfilteredMemberArray];
		}

		return selectedMembers;
	}

	$: if ($selectedParty && isInitialized) {
		shuffledPartyMembers = smartshuffle(originalPartyMembers);
		distributeMembers();
	}
</script>

<div class="wrapper">
	<h1 in:fly={{ y: 10, easing: quintOut, duration: 750 }}>The Wedding Party</h1>

	<PartySwitcher />
	<p in:fly={{ y: -10, easing: quintOut, duration: 900, delay: 1000 }}>
		Click on the three-way toggle above to filter the results!
	</p>

	{#key columns}
		<div class="masonry-container">
			{#each columns as column, colIndex}
				<div class="column">
					{#each column as memberInfo, index}
						<PartyMember {index} {colIndex} {columnsCount} {memberInfo} />
					{/each}
				</div>
			{/each}
		</div>
	{/key}
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
	}

	h1 {
		margin-bottom: 1rem;
		color: var(--c-text-main);
	}

	p {
		margin-bottom: 1rem;
		color: gray; /* Custom css property???? */
	}

	.masonry-container {
		display: grid;
		grid-gap: 2rem;
	}

	.column {
		display: flex;
		flex-direction: column;
	}

	@media (min-width: 767px) {
		.masonry-container {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1150px) {
		.masonry-container {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (min-width: 1700px) {
		.masonry-container {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>
