<!--
Checkbox Component (Checkbox.svelte)
Renders different types of checkboxes with an option of an icon.  Currently 
loosely based on material design 3.

Author: Neil A. Kumar (2024)
Status: Okay
-->

<script>
	export let name = 'Unlabeld Checkbox';
	export let disabled = false;
</script>

<label for="{name}-checkbox" class:disabled>
	<div class="statelayer">
		<input type="checkbox" {name} {disabled} {...$$restProps} id="{name}-checkbox" />
	</div>
	<p>
		{name}
	</p>
</label>

<style>
	* {
		cursor: inherit;
	}

	label {
		border-radius: 24px;
		width: max-content;
		display: flex;
		align-items: center;
		cursor: pointer;
	}

	label.disabled {
		cursor: not-allowed;
		color: var(--c-background-disabled);
	}

	.statelayer {
		border-radius: 20px;
		height: 40px;
		width: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 4px;
	}

	.statelayer:hover {
		background: var(--c-background-hover);
	}

	.disabled .statelayer:hover {
		background: none;
	}

	input {
		border-radius: 2px;
		height: 18px;
		width: 18px;
		margin: 0;
	}

	p {
		line-height: 18px;
		margin-right: 4px;
		color: var(--c-text-main);
	}

	label.disabled p {
		color: var(--c-background-disabled);
	}
</style>
