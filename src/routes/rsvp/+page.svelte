<script>
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import NameInput from './NameInput.svelte';
	import NameSearch from './NameSearch.svelte';
	import PartySelect from './PartySelect.svelte';
	import PartySearch from './PartySearch.svelte';
	import Rsvp from './RSVP.svelte';
	import RsvpSubmit from './RSVPSubmit.svelte';
	import Success from './Success.svelte';

	let stages = [
		'nameinput',
		'gettinginfo',
		'partyselect',
		'getrsvpinfo',
		'rsvp',
		'submittingrsvp',
		'success'
	];
	let stage = 0;
	let error = '';
	let errSuggestion = '';
	let name = '';
	let submitStatus = '';
	let parties = [''];
	let rsvpData = {};
	let guestsInfo;

	const SCRIPT_URL =
		'https://script.google.com/macros/s/AKfycbzQu_rg6YTg8xZysfS6DsKeyZgzIZ_cp_rm_UpRhsvKMMIhcfNcCnEKOolg1c1mqPEZ/exec';

	$: currentStage = stages[stage];
</script>

<div class="wrapper">
	<h1 in:fly={{ y: 10, easing: quintOut, duration: 750 }}>RSVP</h1>
	<div class="form-container">
		{#if currentStage == 'nameinput'}
			<NameInput bind:stage bind:value={name} bind:error bind:errSuggestion />
		{:else if currentStage == 'gettinginfo'}
			<NameSearch
				bind:stage
				bind:name
				bind:parties
				bind:guestsInfo
				bind:error
				bind:errSuggestion
				{SCRIPT_URL}
			/>
		{:else if currentStage == 'partyselect'}
			<PartySelect bind:stage bind:parties bind:name />
		{:else if currentStage == 'getrsvpinfo'}
			<PartySearch party={parties[0]} bind:stage bind:guestsInfo {SCRIPT_URL} />
		{:else if currentStage == 'rsvp'}
			<Rsvp bind:stage {guestsInfo} bind:rsvpData />
		{:else if currentStage == 'submittingrsvp'}
			<RsvpSubmit bind:stage {SCRIPT_URL} {rsvpData} bind:submitStatus />
		{:else if currentStage == 'success'}
			<Success bind:stage {submitStatus} />
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
		padding: 1rem;
		height: 100%;
		border-radius: 25px;
		width: 90vw;
		max-width: 900px;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 2px solid var(--c-background-nav);
	}

	@media (min-width: 767px) {
		.form-container {
			border: 2px solid var(--c-background-nav);
			padding: 3rem;
		}
	}
</style>
