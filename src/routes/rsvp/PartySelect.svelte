<script>
	export let stage = 2;
	export let parties = [''];

	import Button from '$lib/components/Button.svelte';
	import RadioInput from '$lib/components/RadioInput.svelte';

	let selectedParty = null;

	let handleSubmit = (status = '') => {
		if (status === 'moveOn' || (status === '' && selectedParty)) {
			parties = [parties[selectedParty-1]];
			stage = 3;
		} else if (status === 'goBack' || (status === '' && !selectedParty)) {
			stage = 0;
		}
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<div class="infotext">
		<h1>Mason and Neil's Wedding</h1>
		{#if parties.length == 0}
			<p>
				We found no matching results... If this keeps happening, reach out to the couple for
				troubleshooting
			</p>
		{:else if parties.length == 1}
			<p>
				We found a potential guest list match! Please confirm this is your party. Otherwise, go back
				to search
			</p>
		{:else}
			<p>
				We found {parties.length} potential guest party matches... Please confirm which one you are a
				part of. Otherwise, go back to search
			</p>
		{/if}
	</div>
	<div class="input">
		{#each parties as party, idx}
			<RadioInput value={idx+1} bind:group={selectedParty} label={party.guests} />
		{/each}
	</div>
	<Button
		buttonType="filled"
		onClickFunc={() => handleSubmit('moveOn')}
		name="CONTINUE"
		disabled={!selectedParty}
	/>
	<Button
		buttonType="filled"
		onClickFunc={() => handleSubmit('goBack')}
		name="SEARCH AGAIN"
	/>
</form>

<style>
	form {
		background: var(--c-background-main);
		max-width: 500px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1rem;
	}

	.infotext {
		margin-bottom: 1rem;
	}

	div {
		background: var(--c-background-main);
	}

	h1 {
		margin-bottom: 1rem;
	}

	.input {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-left: 2.5rem;
		margin-bottom: 1rem;
		margin-right: 2rem;
	}
</style>
