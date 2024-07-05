<!--
Text Input Component (TextInput.svelte)
Renders different types of text input boxes with an option of an icon.
Currently loosely based on material design 3.

Author: Neil A. Kumar (2024)
Status: Okay
-->

<script>
	export let id = 'textInput';
	export let label = '';
	export let value = '';
	export let placeholder = '';
	export let required = false;
	export let disabled = false;
	export let error = '';

	let focused = false;
	let filled = false;

	$: filled = value.length > 0;

	let focusHandler = () => {
		focused = true;
	};
	let blurHandler = () => {
		focused = false;
	};
</script>

<div class="text-field" class:focused class:filled class:error class:disabled>
	<input
		{id}
		type="text"
		{placeholder}
		{required}
		{disabled}
		bind:value
		on:focus={focusHandler}
		on:blur={blurHandler}
		{...$$restProps}
	/>
	<label for={id}>{label}</label>
	{#if error}
		<div class="error">{error}</div>
	{/if}
</div>

<style>
	.text-field {
		position: relative;
		margin-bottom: 1rem;
	}

	.text-field.focused input,
	.text-field.filled input {
		border-color: var(--c-background-active);
	}

	.text-field.focused label,
	.text-field.filled label {
		transform: translateY(-1.5rem) scale(0.75);
		color: var(--c-text-nav);
		background: var(--c-background-nav);
		padding: 0 0.25rem;
	}

	.text-field.error {
		color: #b3261e;
		font-size: 0.75rem;
		margin-top: 0.25rem;
	}

	.text-field.error input {
		border-color: #b3261e;
	}

	.text-field.error label {
		color: #b3261e;
	}

	.text-field.disabled input {
		background: var(--c-background-disabled);
		border-color: var(--c-text-disabled);
		color: var(--c-text-disabled);
	}

	.text-field.disabled label {
		color: var(--c-text-disabled);
	}

	input {
		border-radius: 4px;
		width: 100%;
		padding: 1rem;
		font-size: 1rem;
		border: 1px solid var(--c-background-active);
		background: var(--c-background-nav);
	}

	label {
		position: absolute;
		left: 1rem;
		top: 1rem;
		font-size: 1rem;
		color: var(--c-text-nav);
		transition: all 0.2s ease-in-out;
		pointer-events: none;
	}
</style>
