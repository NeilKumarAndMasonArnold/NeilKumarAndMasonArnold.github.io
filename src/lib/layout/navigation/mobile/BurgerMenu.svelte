<!--
Mobile Navigation Hamburger Menu Component (BurgerMenu.svelte)
This component renders an accessible burger menu icon that graphically shifts 
when opened.

Author: Neil A. Kumar (2024)
Status: Complete
-->

<script>
	export let menuOpen = false;
</script>

<button on:click={() => (menuOpen = !menuOpen)} class:open={menuOpen} title="Open Navigation Panel">
	<span />
</button>

<style>
	button,
	span::before,
	span,
	span::after {
		transition: all var(--td-medium-4) var(--te-emphasized);
	}

	button {
		height: 48px;
		width: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		z-index: 40;
		background: transparent;
		border: none;
		cursor: pointer;
		user-select: none;
	}

	span {
		height: 2px;
		width: 24px;
		border-radius: 1px;
		display: flex;
		flex-wrap: wrap;
		background: var(--c-text-nav);
	}

	span::before,
	span::after {
		content: '';
		height: 2px;
		width: 24px;
		border-radius: 1px;
		position: absolute;
		background: var(--c-text-nav);
	}

	span::before {
		transform: translateY(-6.5px);
	}

	span::after {
		transform: translateY(6.5px);
	}

	.open span {
		background: transparent;
		transform: translateX(-10px);
	}

	.open span::before {
		transform: rotate(45deg) translate(10px, -10px);
	}

	.open span::after {
		transform: rotate(-45deg) translate(10px, 10px);
	}

	@media (min-width: 768px) {
		button {
			display: none;
		}
	}
</style>