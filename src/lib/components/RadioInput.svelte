<!--
Radio Button Input Component (RadioInput.svelte)
Renders a multiple choice radio selection input componet.  Currenstly loosely 
based on material design 3.

Author: Neil A. Kumar (2024)
Status: Ongoing
-->

<script>
	export let name = 'Radio Button';
	export let value = '';
	export let group = '';
	export let disabled = false;
	export let label = 'Label';
</script>

<label>
	<input type="radio" {name} {value} bind:group {disabled} />
	<span class="radio-button" />
	<span class="radio-label">{label}</span>
</label>

<style>
	label {
		display: flex;
		align-items: center;
		position: relative;
		cursor: pointer;
	}

	input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
	}

	.radio-button {
		position: relative;
		height: 20px;
		width: 20px;
		border-radius: 50%;
		border: 2px solid var(--c-text-main);
		margin-right: 8px;
	}

	input:checked + .radio-button {
		border-color: var(--c-background-active);
	}

	.radio-button::after {
		content: '';
		position: absolute;
		display: none;
		top: 3px;
		left: 3px;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: var(--c-background-active);
		transition: all var(--td-medium-4) var(--te-emphasized);
	}

	input:checked + .radio-button::after {
		display: block;
		transition: all var(--td-medium-4) var(--te-emphasized);
	}

	input:focus + .radio-button {
		box-shadow: 0 0 0 2px var(--c-background-hover);
	}

	input:disabled + .radio-button {
		border-color: var(--c-background-disabled);
		cursor: not-allowed;
	}

	input:disabled:checked + .radio-button::after {
		background: var(--c-background-disabled);
		transition: all var(--td-medium-4) var(--te-emphasized);
	}

	.radio-label {
		padding-left: 4px;
		text-align: left;
		max-width: calc(100% - 28px); /* subtract radio-button width/margin */
		color: var(--c-text-main);
	}

	input:disabled ~ .radio-label {
		color: var(--c-background-disabled);
		cursor: not-allowed;
	}
</style>
