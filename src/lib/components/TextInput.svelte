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
	export let display = false;
	export let error = '';

	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

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

<div class="textfield-{type}" class:focused class:filled class:error class:disabled class:display>
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
		<div class="error error-label" transition:fly={{ y: -16, easing: quintOut, duration: 500 }}>
			{error}
		</div>
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
		color: var(--c-background-active);
		background: inherit;
		padding: 0 4px;
	}

	/* ------------ */

	.textfield-filled {
		position: relative;
		background: inherit;
	}

	.textfield-filled input {
		border-radius: 4px 4px 0 0;
		background: var(--c-background-nav);
		border: none;
		border-bottom: 1px solid var(--c-background-active);
		margin: 0;
		margin-bottom: 1px;
	}

	.textfield-filled.focused input,
	.textfield-filled.filled input {
		border-bottom: 2px solid var(--c-background-active);
		margin: 0;
		padding-top: 16px;
		outline: none;
	}

	.textfield-filled.focused label,
	.textfield-filled.filled label {
		font-size: 12px;
		line-height: 16px;
		transform: translateY(-9px);
		color: var(--c-background-active);
	}

	/* ------------ */

	.textfield-outlined.disabled input,
	.textfield-filled.disabled input {
		cursor: not-allowed;
	}

	.textfield-outlined.disabled label,
	.textfield-filled.disabled label {
		color: var(--c-background-disabled);
	}

	.textfield-outlined.disabled input,
	.textfield-filled.disabled input {
		border-color: var(--c-background-disabled);
		border-width: 1px;
		color: var(--c-background-disabled);
	}

	.textfield-filled.disabled input {
		background: var(--c-background-disabled);
	}

	/* ------------ */

	.error-label.error {
		text-align: left;
		font-size: 12px;
		line-height: 16px;
		margin-left: 16px;
		margin-top: 6px;
		color: var(--c-text-error);
	}

	.textfield-outlined.error,
	.textfield-outlined.error label,
	.textfield-filled.error,
	.textfield-filled.error label {
		color: var(--c-text-error);
	}

	.textfield-outlined.error input,
	.textfield-filled.error input {
		border-color: var(--c-text-error);
		caret-color: var(--c-text-error);
	}

	/* ------------ */

	.textfield-outlined.disabled.display input {
		cursor: default;
		border-color: var(--c-text-nav);
		border-width: 1px;
		color: inherit;
	}

	.textfield-outlined.disabled.display label {
		color: var(--c-text-nav);
	}
</style>
