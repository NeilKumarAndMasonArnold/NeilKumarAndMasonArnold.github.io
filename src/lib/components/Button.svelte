<!--
Button Component (Button.svelte)
Renders different types of button with an option of an icon.  Currently loosely 
based on material design 3.

Author: Neil A. Kumar (2024)
Status: Okay
-->

<script>
	export let type = '';
	export let href = '';
	export let target = '';
	export let icon = '';
	export let fill = 'var(--c-text-main)';

	import { iconLibrary } from '$lib';
	import Icon from './Icon.svelte';
</script>

<button on:click>
	{#if href}
		<a {href} {target} {...$$restProps} class={`button-${type}`}>
			{#if icon}
				<div class="icon-container">
					<Icon
						{fill}
						path={iconLibrary[`${icon}`].path}
						viewBox={iconLibrary[`${icon}`].viewBox}
					/>
				</div>
			{/if}
			<slot />
		</a>
	{:else}
		<div {...$$restProps} class={`button-${type}`}>
			{#if icon}
				<div class="icon-container">
					<Icon
						{fill}
						path={iconLibrary[`${icon}`].path}
						viewBox={iconLibrary[`${icon}`].viewBox}
					/>
				</div>
			{/if}
			<slot />
		</div>
	{/if}
</button>

<style>
	button {
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

	a:hover,
	a:focus,
	div:hover,
	div:focus {
		filter: brightness(85%);
	}

	.icon-container {
		width: 1rem;
	}
</style>
