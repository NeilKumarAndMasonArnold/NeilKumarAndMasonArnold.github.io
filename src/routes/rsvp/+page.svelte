<script>
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import NameInput from './NameInput.svelte';
	import NameSearch from './NameSearch.svelte';
	import PartySelect from './PartySelect.svelte';
	import PartySearch from './PartySearch.svelte';
	import Rsvp from './RSVP.svelte';

	let stages = ['nameinput', 'gettinginfo', 'partyselect', 'getrsvpinfo', 'rsvp'];
	let stage = 0;
	let error = '';
	let errSuggestion = '';
	let name = '';
	let parties = [''];
	let guestsInfo;

	$: currentStage = stages[stage];
</script>

<div class="wrapper">
	<h1 in:fly={{ y: 10, easing: quintOut, duration: 750 }}>RSVP</h1>
	<div class="form-container">
		{#if currentStage == 'nameinput'}
			<NameInput bind:stage bind:value={name} bind:error bind:errSuggestion />
		{:else if currentStage == 'gettinginfo'}
			<NameSearch bind:stage bind:name bind:parties bind:guestsInfo bind:error bind:errSuggestion />
		{:else if currentStage == 'partyselect'}
			<PartySelect bind:stage bind:parties />
		{:else if currentStage == 'getrsvpinfo'}
			<PartySearch party={parties[0]} bind:stage bind:guestsInfo />
		{:else if currentStage == 'rsvp'}
			<Rsvp bind:stage {guestsInfo} />
		{/if}
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background: var(--c-background-main);
	}

	h1 {
		color: var(--c-text-main);
	}

	.form-container {
		padding: 3rem;
		height: 100%;
		border-radius: 25px;
		width: 90vw;
		max-width: 900px;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid var(--c-text-main);
	}

	@media (min-width: 767px) {
		.form-container {
			border: 1px solid var(--c-text-main);
		}
	}
</style>
