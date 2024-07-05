<!--
Navigation Host Component (NavHost.svelte)
This component is responsible for managing and displaying the main navigational
elements within the application.

Author: Neil A. Kumar (2024)
Status: Ongoing
-->

<script>
	//@ts-nocheck
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import { pageTree } from '$lib';

	import SkipNavButton from './SkipNavButton.svelte';
	import HamburgerMenu from './mobile/BurgerMenu.svelte';
	import HomePageLogo from './HomePageLogo.svelte';
	import NavButton from './NavButton.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import Scrim from './mobile/Scrim.svelte';

	let menuOpen = false;
	$: secretPage = $page.url.pathname === '/testpage' || $page.url.pathname === '/fun';
	let y;

	onMount(() => {
		return page.subscribe(() => {
			menuOpen = false;
		});
	});
</script>

<svelte:window bind:scrollY={y} />
<nav class:scrolled={y > 10}>
	<SkipNavButton />
	<HamburgerMenu bind:menuOpen />
	<HomePageLogo />

	{#key menuOpen}
		<div class="nav-wrapper" class:menuOpen transition:fly={{ x: -600, duration: 500 }}>
			<ul class="nav-buttons">
				{#each pageTree as page}
					<NavButton href={page.link} name={page.name} subpages={page.subpages} />
				{/each}
				{#if secretPage}
					<NavButton href={$page.url.pathname} name="Secret Page!" />
				{/if}
			</ul>

			<div id="theme-navigation">
				<ThemeToggle lightThemeLabel="LIGHT" darkThemeLabel="NIGHT" />
			</div>
		</div>
	{/key}

	<Scrim bind:menuOpen />
</nav>

<style>
	nav {
		height: 80px;
		width: 100%;
		display: flex;
		gap: 1rem;
		align-items: center;
		justify-content: normal;
		position: fixed;
		top: 0;
		padding: 1rem 2rem;
		background: var(--c-background-nav);
		z-index: 10;
	}

	.scrolled {
		box-shadow: var(--c-shadow-drop);
	}

	.nav-wrapper {
		height: 100%;
		width: 20rem;
		border-radius: 0 24px 24px 0;
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 30;
		margin: 0;
		padding: 6rem 1rem 1rem 1rem;
		background: var(--c-background-nav);
	}

	.menuOpen {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		justify-content: space-between;
	}

	#theme-navigation {
		display: flex;
		align-items: center;
		z-index: 30;
	}

	.nav-buttons {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		width: 100%;
	}

	@media (min-width: 768px) {
		nav {
			justify-content: space-between;
			gap: 2rem;
		}

		.nav-wrapper {
			height: 55px;
			width: 100%;
			border-radius: 0;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			position: static;
			z-index: auto;
			padding: 0;
		}

		#theme-navigation {
			z-index: auto;
			padding: 0;
		}

		.nav-buttons {
			height: 100%;
			width: auto;
			flex-direction: row;
			align-items: center;
		}
	}
</style>
