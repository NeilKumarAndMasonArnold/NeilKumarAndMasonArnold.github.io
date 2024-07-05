<!--
Main Logo Component (HomePageLogo.svelte)
This components renders a responsive logo for the nav-bar that links to the
site's homepage.

Author: Neil A. Kumar (2024)
Status: Complete
-->

<script>
	import { iconLibrary } from '$lib';
	import Icon from '$lib/components/Icon.svelte';
</script>

<a href="/">
	<Icon
		path={iconLibrary['heart'].path}
		viewBox={iconLibrary['heart'].viewBox}
		fill="gradient"
		width="36px"
		height="36px"
	/>
	<h1>
		<span class="mason">M</span>&<span class="neil">N</span>
	</h1>
</a>

<style>
	a {
		display: flex;
		gap: 1rem;
		align-items: center;
		padding: 0.5rem;
		text-decoration: none;
	}

	h1 {
		color: var(--c-text-main);
		font-size: 2rem;
	}

	.mason {
		color: var(--c-accent-mason);
	}

	.neil {
		color: var(--c-accent-neil);
	}

	@media (min-width: 768px) {
		a {
			border-radius: 10px;
		}
		h1 {
			display: none;
		}
	}
</style>