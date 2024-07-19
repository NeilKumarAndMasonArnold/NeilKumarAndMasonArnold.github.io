<script>
	export let stage = 0;
	export let value = '';
	export let error = '';
	export let errSuggestion = '';

	import Button from '$lib/components/Button.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let handleSubmit = () => {
		if (!value) {
			errSuggestion =
				'At least some name is required in order for the website to find your invitation.  It does not have to be exact';
			error = 'A name is required';
		} else if (!value.trim()) {
			errSuggestion = 'Trying to sneak in without a name? Please enter a real name.';
			error = 'A name is required';
		} else if (value.toLowerCase() === 'null' || value.toLowerCase() === 'undefined') {
			errSuggestion =
				"Oh c'mon man!  I'm not a professional programmer.  I made this site from scratch just to save some money.  If you try to break my website it WILL break...probably easily.  So please stop trying and just enter your real name.";
			error = 'Not a real name';
		} else if (/[^a-zA-Z \-'.]/.test(value)) {
			errSuggestion =
				"Hmm, those characters seem a bit extra.  Just unaccented letters, spaces, hyphens, apostrophes, and periods, please.  If your name still gets flagged, maybe it's time for a nickname?  Or, you could contact us directly!";
			error = 'No special characters';
		} else if (
			value.toLowerCase() === 'i solemnly swear i am up to no good' ||
			value.toLowerCase() === "i solemnly swear i'm up to no good" ||
			value.toLowerCase() === 'i solemnly swear that i am up to no good'
		) {
			value = ' ';
			stage = 1;
		} else {
			stage = 1;
		}
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<div class="infotext">
		<h1>Mason and Neil's Wedding</h1>
		<p>Let's find your invitation! Please enter your name:</p>
	</div>
	<div>
		<TextInput type="filled" label="Full Name" bind:value {error} />
		{#if error}
			<div
				class="errSuggestion"
				in:fly|global={{ x: -25, easing: quintOut, duration: 500, delay: 250 }}
			>
				<p class="title">Suggestion:</p>
				<p class="suggestion">{errSuggestion}</p>
			</div>
		{/if}
	</div>
	<Button
		buttonType="filled"
		type="submit"
		on:click={handleSubmit}
		name="FIND YOUR INVITATION"
		{error}
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

	.errSuggestion {
		margin-top: 1rem;
		padding: 1rem 0.5rem;
		text-align: left;
		background: var(--c-background-error);
		border-left: 4px solid var(--c-text-error);
		color: var(--c-text-error);
		border-radius: 0 4px 4px 0;
	}

	.errSuggestion .title {
		font-weight: var(--fw-bold);
		margin-bottom: 1rem;
	}

	.errSuggestion .suggestion {
		margin-left: 1rem;
	}
</style>
