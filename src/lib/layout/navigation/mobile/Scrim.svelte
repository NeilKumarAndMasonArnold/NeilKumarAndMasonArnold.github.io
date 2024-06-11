<!--
Mobile Navigation Scrim Component (Scrim.svelte)
This component renders an accessible scrim when the menu drawer is open.

Author: Neil A. Kumar (2024)
Status: Complete
-->

<script>
	export let menuOpen = true;
	import { fade } from 'svelte/transition';
</script>

{#if menuOpen}
	<div
		role="button"
		tabindex="0"
		aria-label="Close Menu"
		aria-expanded={menuOpen}
		transition:fade={{ duration: 500 }}
		on:click={() => (menuOpen = false)}
		on:keydown={(e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				menuOpen = false;
				e.preventDefault();
			}
		}}
	/>
{/if}

<style>
	div {
		height: 100%;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 20;
		background: var(--c-shadow-scrim);
	}
	@media (min-width: 768px) {
		div {
			display: none;
		}
	}
</style>