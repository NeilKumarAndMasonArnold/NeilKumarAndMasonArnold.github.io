<!--
Button Component (Button.svelte)
Renders different types of button with an option of an icon.  Currently loosely 
based on material design 3.

Author: Neil A. Kumar (2024)
Status: Okay
-->

<script>
	export let buttonType = '';
	export let type = null;
	export let disabled = false;
	export let name = 'Button';
	export let href = '';
	export let target = '';
	export let icon = '';
	export let fill = 'var(--c-text-main)';
	export let onClickFunc = null;

	import { iconLibrary } from '$lib';
	import Icon from './Icon.svelte';
</script>

{#if href}
	<a href={!disabled ? href : ''} {target} {...$$restProps} class={`button-${buttonType}`} class:disabled>
		{#if icon}
			<div class="icon-container">
				<Icon {fill} path={iconLibrary[`${icon}`].path} viewBox={iconLibrary[`${icon}`].viewBox} />
			</div>
		{/if}
		{name}
	</a>
{:else}
	<button on:click={onClickFunc} title={name} {disabled} {type} >
		<div {...$$restProps} class={`button-${buttonType}`} class:disabled>
			{#if icon}
				<div class="icon-container">
					<Icon
						{fill}
						path={iconLibrary[`${icon}`].path}
						viewBox={iconLibrary[`${icon}`].viewBox}
					/>
				</div>
			{/if}
			{name}
		</div>
	</button>
{/if}

<style>
	button {
		border-radius: 100px;
		margin: 0;
		padding: 0;
		border: none;
		background: transparent;
	}

	.button-filled {
		padding: 16px 24px;
		background: var(--c-accent-modes);
		color: var(--c-text-active);
	}

	.button-filled.disabled {
		background: lightgray;
		color: white;
	}

	.button-text {
		color: var(--c-accent-modes);
		font-weight: var(--fw-medium);
		letter-spacing: var(--ls-normal);
	}

	.button-tonal {
		padding: 16px 24px;
		background: var(--c-background-nav);
		color: var(--c-text-tonal);
	}

	a,
	div {
		min-width: max-content;
		border-radius: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		border: none;
		color: var(--c-text-main);
		text-decoration: none;
		font-size: var(--fs-normal);
		font-weight: var(--fw-semi-bold);
		user-select: none;
		cursor: pointer;
	}

	a.disabled, div.disabled {
		cursor: not-allowed;
	}

	a:hover,
	a:focus,
	div:hover,
	div:focus {
		filter: brightness(85%);
	}

	a.disabled:hover,
	a.disabled:focus,
	div.disabled:hover,
	div.disabled:focus {
		filter: none;
	}

	.icon-container {
		width: 1rem;
	}
</style>
