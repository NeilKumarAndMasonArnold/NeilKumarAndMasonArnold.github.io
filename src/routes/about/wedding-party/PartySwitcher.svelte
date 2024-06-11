<!--
Wedding Party Filter Toggle (PartySwitcher.svelte)
Renders a 3-way toggle switch for filtering the wedding party members.

Author: Neil A. Kumar (2024)
Status: Okay
-->

<script>
	import Icon from '$lib/components/Icon.svelte';
	import { fly } from 'svelte/transition';
	import { iconLibrary, selectedParty } from '$lib';
	import { quintOut } from 'svelte/easing';

	let selected = 'both';
	let leftPosition = 'calc(0% + 8rem)';
	let rightPosition = 'calc(0% + 8rem)';
	let fill = 'gradient';

	$: {
		if (selected === 'bride') {
			leftPosition = 'calc(0% + 0.25rem)';
			rightPosition = 'calc(0% + 8rem)';
			fill = 'var(--c-accent-modes)';
		} else if (selected === 'groom') {
			leftPosition = 'calc(0% + 8rem)';
			rightPosition = 'calc(0% + 0.25rem)';
			fill = 'var(--c-accent-modes)';
		} else {
			leftPosition = 'calc(0% + 8rem)';
			rightPosition = 'calc(0% + 8rem)';
			fill = 'gradient';
		}
	}

	$: selectedParty.set(selected);
</script>

<div class="container" in:fly|global={{ y: 10, easing: quintOut, duration: 750, delay: 100 }}>
	<div class="tabs">
		<input type="radio" id="radio-1" name="tabs" bind:group={selected} value="bride" />
		<label for="radio-1" class="tab">Bride</label>

		<input type="radio" id="radio-2" name="tabs" bind:group={selected} value="both" />
		<label for="radio-2" class="tab">
			<Icon
				path={iconLibrary['heart'].path}
				viewBox={iconLibrary['heart'].viewBox}
				{fill}
				width="36"
				height="36"
			/>
		</label>

		<input type="radio" id="radio-3" name="tabs" bind:group={selected} value="groom" />
		<label for="radio-3" class="tab">Groom</label>

		<span class="glider" style="left: {leftPosition}; right: {rightPosition};" />
	</div>
</div>

<style>
	.container {
		align-items: center;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		margin-bottom: 2rem;
	}

	.tabs {
		background: var(--c-background-nav);
		border-radius: 999px;
		box-shadow: 0 9.3905074804px 15px var(--c-shadow-gallery);
		display: flex;
		padding: 0.25rem;
		position: relative;
	}

	.tabs * {
		z-index: 2;
	}

	.tabs input[type='radio'] {
		display: none;
	}

	.tabs input[type='radio']:checked + label {
		color: var(--c-text-active);
	}

	.tabs input[id='radio-1']:checked ~ .glider {
		background-color: var(--c-accent-mason);
	}

	.tabs input[id='radio-3']:checked ~ .glider {
		background-color: var(--c-accent-neil);
	}

	.tabs label {
		font-size: var(--fs-large);
		font-weight: var(--fw-bold);
	}

	.tab {
		align-items: center;
		border-radius: 999px;
		cursor: pointer;
		display: flex;
		font-size: 1.25rem;
		font-weight: 500;
		height: 54px;
		justify-content: center;
		width: 8rem;
	}

	.tab[for='radio-2'] {
		width: 54px;
	}

	.glider {
		background: var(--c-background-active);
		border-radius: 999px;
		display: flex;
		height: 54px;
		position: absolute;
		z-index: 1;
	}
</style>