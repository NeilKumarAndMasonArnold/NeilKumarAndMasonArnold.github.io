<!--
Text Input Component (TextInput.svelte)
Renders different types of text input boxes with an option of an icon.
Currently loosely based on material design 3.

Author: Neil A. Kumar (2024)
Status: Okay
-->

<script>
	export let id = 'textInput';
	export let type = 'outlined';
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

<div class="textfield-{type}" class:focused class:filled class:error class:disabled>
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
		<div class="error error-label">{error}</div>
	{/if}
</div>

<style>
	input {
		width: 100%;
		padding: 0 16px;
		height: 56px;
		line-height: 24px;
		font-size: 16px;
		border: 1px solid var(--c-text-main);
		margin: 1px;
		caret-color: var(--c-background-active);
	}

	label {
		position: absolute;
		top: 16px;
		left: 16px;
		line-height: 24px;
		font-size: 16px;
		color: var(--c-text-main);
		pointer-events: none;
	}

	.textfield-outlined {
		position: relative;
		background: inherit;
	}

	.textfield-outlined.disabled input {
		cursor: not-allowed;
	}

	.textfield-outlined input {
		border-radius: 4px;
		background: inherit;
	}

	.textfield-outlined.focused input,
	.textfield-outlined.filled input {
		border: 2px solid var(--c-background-active);
		margin: 0;
		outline: none;
	}

	.textfield-outlined.focused label,
	.textfield-outlined.filled label {
		font-size: 12px;
		line-height: 16px;
		transform: translateY(-24px);
		color: var(--c-text-main);
		background: inherit;
		padding: 0 4px;
	}

	.textfield-outlined.error,
	.textfield-outlined.error label {
		color: #f44336;
	}

	.textfield-outlined.error input {
		border-color: #f44336;
		caret-color: #f44336;
	}

	.error-label.error {
		text-align: left;
		font-size: 12px;
		line-height: 16px;
		margin-left: 16px;
	}

	.textfield-outlined.disabled label {
		color: var(--c-background-disabled);
	}

	.textfield-outlined.disabled input {
		border: 1px solid var(--c-background-disabled);
		color: var(--c-background-disabled);
	}
</style>
