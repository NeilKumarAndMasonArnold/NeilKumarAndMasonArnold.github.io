<!--
Button Component (Button.svelte)
Renders different types of button with an option of an icon on either side.
Currently loosely based on material design 3.

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
	export let iconLocation = 'left';
	export let fill = 'var(--c-text-main)';
	export let onClickFunc = null;
	export let customTextColor = '';
	export let customBackgroundColor = '';
	export let customOutlineColor = '';

	import { iconLibrary } from '$lib';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Icon from './Icon.svelte';

	$: {
		if (disabled) {
			// If the button is disabled, ensure the disabled fill
			fill =
				buttonType === 'text' || buttonType === 'outlined'
					? 'var(--c-background-disabled)'
					: 'var(--c-text-disabled)';
		} else {
			// Otherwise, base the fill on the text color
			switch (buttonType) {
				case 'filled':
					fill = customTextColor || 'var(--c-text-active)';
					break;
				case 'text':
					fill = customTextColor || 'var(--c-accent-modes)';
					break;
				case 'outlined':
					fill = customTextColor || 'var(--c-background-active)';
					break;
				case 'tonal':
					fill = customTextColor || 'var(--c-text-tonal)';
					break;
				default:
					fill = 'red'; // This shouldn't happen, so red
			}
		}
	}

	$: buttonStyle = (() => {
		let style = '';
		if (customBackgroundColor && !disabled) {
			style += `background: ${customBackgroundColor};`;
		}
		if (customOutlineColor && !disabled) {
			style += `outline-color: ${customOutlineColor};`;
		}
		return style;
	})();

	$: buttonTextStyle = (() => {
		let style = '';
		if (customTextColor && !disabled) {
			style+= `color: ${customTextColor};`;
		}
		return style;
	})();
</script>

{#if href}
	<a
		href={!disabled ? href : ''}
		{target}
		{...$$restProps}
		class={`button-${buttonType}`}
		class:disabled
		style={buttonStyle}
	>
		{#if icon && icon !== 'placeholder' && iconLocation === 'left'}
			<div class="icon-container" in:fly={{ x: 25, easing: quintOut, duration: 500 }}>
				<Icon {fill} path={iconLibrary[`${icon}`].path} viewBox={iconLibrary[`${icon}`].viewBox} />
			</div>
		{:else if icon === 'placeholder'}
			<div class="icon-container">
				<div class="placeholderIcon" />
			</div>
		{/if}
		<span style={buttonTextStyle}>
			{name}
		</span>
		{#if icon && icon !== 'placeholder' && iconLocation === 'right'}
			<div class="icon-container" in:fly={{ x: -25, easing: quintOut, duration: 500 }}>
				<Icon {fill} path={iconLibrary[`${icon}`].path} viewBox={iconLibrary[`${icon}`].viewBox} />
			</div>
		{:else if icon === 'placeholder'}
			<div class="placeholderIcon" />
		{/if}
	</a>
{:else}
	<button on:click={onClickFunc} title={name} {disabled} {type}>
		<div {...$$restProps} class={`button-${buttonType}`} class:disabled style={buttonStyle}>
			{#if icon && icon !== 'placeholder' && iconLocation === 'left'}
				<div class="icon-container" in:fly={{ x: 25, easing: quintOut, duration: 500 }}>
					<Icon
						{fill}
						path={iconLibrary[`${icon}`].path}
						viewBox={iconLibrary[`${icon}`].viewBox}
					/>
				</div>
			{:else if icon === 'placeholder'}
				<div class="placeholderIcon" />
			{/if}
			<span style={buttonTextStyle}>
				{name}
			</span>
			{#if icon && icon !== 'placeholder' && iconLocation === 'right'}
				<div class="icon-container" in:fly={{ x: -25, easing: quintOut, duration: 500 }}>
					<Icon
						{fill}
						path={iconLibrary[`${icon}`].path}
						viewBox={iconLibrary[`${icon}`].viewBox}
					/>
				</div>
			{:else if icon === 'placeholder'}
				<div class="placeholderIcon" />
			{/if}
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

	.button-filled span {
		color: var(--c-text-active);
	}

	.button-filled.disabled {
		background: var(--c-background-disabled);
		color: var(--c-text-disabled);
	}

	.button-text {
		padding: 16px 24px;
		font-weight: var(--fw-medium);
		letter-spacing: var(--ls-normal);
	}

	.button-text span {
		color: var(--c-accent-modes);
	}

	.button-text:hover {
		background: var(--c-background-hover);
	}

	.button-text.disabled {
		color: var(--c-background-disabled);
	}

	.button-text.disabled:hover {
		background: transparent;
	}

	.button-tonal {
		padding: 16px 24px;
		background: var(--c-background-nav);
	}

	.button-tonal span {
		color: var(--c-text-tonal);
	}

	.button-tonal.disabled {
		background: var(--c-background-disabled);
		color: var(--c-text-disabled);
	}

	.button-outlined {
		padding: 16px 24px;
		outline: 1px solid var(--c-background-active);
	}

	.button-outlined span {
		color: var(--c-background-active);
	}

	.button-outlined:hover {
		background: var(--c-background-hover);
	}

	.button-outlined.disabled {
		outline: 1px solid var(--c-background-disabled);
		color: var(--c-background-disabled);
	}

	.button-outlined.disabled:hover {
		background: transparent;
	}

	a,
	div {
		min-width: max-content;
		border-radius: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		border: none;
		color: var(--c-text-main);
		text-decoration: none;
		font-size: var(--fs-extra-small);
		font-weight: var(--fw-semi-bold);
		user-select: none;
		cursor: pointer;
	}

	a.disabled,
	div.disabled,
	.disabled .icon-container {
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
	div.disabled:focus,
	.disabled .icon-container:hover,
	.disabled .icon-container:focus {
		filter: none;
	}

	.icon-container {
		width: 1rem;
	}

	.placeholderIcon {
		width: calc(12px - 0.25rem);
		height: 24px;
	}

	a:hover:not(.disabled),
	div:hover:not(.disabled) {
		filter: brightness(85%);
	}

	@media (min-width: 767px) {
		a,
		div {
			font-size: var(--fs-normal);
			gap: 1rem;
		}

		.placeholderIcon {
			width: calc(12px - 0.5rem);
		}
	}
</style>
