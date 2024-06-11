<!--
Navigation Button Component (NavButton.svelte)
This component renders a reusable button element designed for top-level
navigation of the application.

Author: Neil A. Kumar (2024)
Status: Ongoing
-->

<script>
	export let href;
	export let isSubpage = false;
	export let name;
	export let subpages = [];

	import NavButton from './NavButton.svelte';
	import Icon from '$lib/components/Icon.svelte';

	import { derived } from 'svelte/store';
	import { iconLibrary } from '$lib';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { quintOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	let isHovered = false;
	let subpagesShown = false;
	let hasSubpages = subpages.length > 0;
	$: isCurrent =
		$page.url.pathname === href || ($page.url.pathname.startsWith(href) && href !== '/');

	$: strokeColor = derived(page, ($page) => {
		if (isCurrent) {
			return 'var(--c-text-active)';
		} else if (isHovered) {
			return 'var(--c-text-hover)';
		} else {
			return 'var(--c-text-nav)';
		}
	});

	onMount(() => {
		return page.subscribe(() => {
			subpagesShown = false;
		});
	});
</script>

<li class:subpageExpanded={subpagesShown} class:isSubpage>
	<a {href} aria-current={isCurrent}>
		<span class:hasSubpages>
			{name}
		</span>

		{#if hasSubpages}
			<div
				role="button"
				tabindex="0"
				aria-label="Toggle Subpage Navigation"
				aria-expanded={subpagesShown}
				class="arrow"
				on:click|preventDefault={() => (subpagesShown = !subpagesShown)}
				on:keypress|preventDefault={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						subpagesShown = !subpagesShown;
					}
				}}
				on:mouseenter={() => (isHovered = true)}
				on:mouseleave={() => (isHovered = false)}
				on:focus={() => (isHovered = true)}
				on:blur={() => (isHovered = false)}
			>
				<div style:transform={subpagesShown ? 'rotate(0deg)' : 'rotate(-180deg)'}>
					<Icon
						path={iconLibrary['dropdown'].path}
						fill="none"
						stroke={$strokeColor}
						stroke-width="3px"
						stroke-linecap="round"
						stroke-linejoin="round"
						viewBox={iconLibrary['dropdown'].viewBox}
						width="24px"
						height="24px"
					/>
				</div>
			</div>
		{/if}
	</a>

	{#if hasSubpages && subpagesShown}
		<div id="main-subnavigation" transition:slide={{ easing: quintOut, duration: 500 }}>
			<div class="subnav-buttons">
				{#each subpages as thisSubpage}
					<NavButton name={thisSubpage.name} href={thisSubpage.link} isSubpage={true} />
				{/each}
			</div>
		</div>
	{/if}
</li>

<style>
	* {
		transition: all var(--td-medium-4) var(--te-emphasized);
	}

	li {
		border-radius: 24px;
		position: relative;
		font-size: var(--fs-normal);
		list-style: none;
		user-select: none;
	}

	.subpageExpanded {
		background: var(--c-background-hover);
	}

	li.isSubpage {
		border-radius: 12px;
	}

	li.isSubpage a {
		border-radius: 12px;
	}

	a {
		height: 48px;
		border-radius: 24px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: var(--fs-normal);
		text-align: left;
		text-decoration: none;
	}

	a:hover, a:focus {
		background: var(--c-background-hover);
		color: var(--c-text-hover);
	}

	a[aria-current='true'] {
		background: var(--c-background-active);
		color: var(--c-text-active);
	}

	span {
		margin: 0.75rem 1.25rem;
		color: var(--c-text-nav);
		font-size: var(--fs-normal);
		letter-spacing: var(--ls-normal);
	}

	.arrow {
		height: 48px;
		border-radius: 24px;
		padding: 12px 24px;
		user-select: none;
	}

	.arrow:hover, .arrow:focus {
		background: var(--c-background-hover);
	}

	.arrow div {
		height: 24px;
		width: 24px;
	}

	#main-subnavigation {
		align-items: center;
		display: flex;
		gap: 2rem;
		margin: 1rem;
	}

	.subnav-buttons {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	@media (min-width: 767px) {
		li {
			height: 100%;
			border-radius: 10px;
		}

		li.subpageExpanded {
			border-radius: 10px;
		}

		a {
			height: 100%;
			border-radius: 10px;
			justify-content: center;
			text-align: center;
		}

		span {
			font-weight: var(--fw-semi-bold);
			margin: 10px 16px;
		}

		span.hasSubpages {
			margin: 10px 4px 10px 16px;
		}

		.arrow {
			height: 100%;
			border-radius: 10px;
			padding: 16px 4px;
		}

		#main-subnavigation {
			background-color: var(--c-background-nav);
			border-radius: 10px;
			box-shadow: 0 0 15px var(--c-shadow-gallery);
			left: 50%;
			margin: 0;
			padding: 5px;
			position: absolute;
			top: 150%;
			transform: translateX(-50%);
			z-index: 10;
		}

		.subnav-buttons {
			gap: 0.5rem;
		}
	}
</style>