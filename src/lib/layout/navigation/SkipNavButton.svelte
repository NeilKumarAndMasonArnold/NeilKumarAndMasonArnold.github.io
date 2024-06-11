<!--
Skip Navigation Button Component (SkipNavButton.svelte)
This component renders an off-screen button that appears when focused on, that
when clicked will skip all the navigation components straight to the current
page's main content.SkipNavButton

Author: Neil A. Kumar (2024)
Status: Complete
-->

<a href="#mainContent">Skip Navigation</a>

<style>
	a {
		height: 56px;
		border-radius: 28px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		left: -300px;
		z-index: 50;
		padding: 16px 24px;
		background: var(--c-background-active);
		color: var(--c-text-active);
		text-decoration: none;
		font-size: var(--fs-normal);
		font-weight: var(--fw-semi-bold);
		cursor: pointer;
		user-select: none;
		transition: all var(--td-medium-4) var(--te-emphasized);
	}

	a:focus {
		left: 12px;
	}
</style>