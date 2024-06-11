<!--
Theme Toggle Switch Component (ThemeToggle.svelte)
This component renders an accessible toggle switch for users to manually
override the application's default theming.

Author: Neil A. Kumar (2024)
Status: Okay
-->

<script>
	export let lightThemeLabel = '';
	export let darkThemeLabel = '';

	import { onMount } from 'svelte';

	let prefersDarkTheme = false;

	onMount(() => {
		if (document.body.classList.contains('user-override')) {
			prefersDarkTheme = document.body.classList.contains('dark-theme');
		} else {
			prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
		}

		if (prefersDarkTheme) {
			document.body.classList.add('dark-theme');
		} else {
			document.body.classList.add('light-theme');
		}
	});

	// Why am I getting an typescript-like type casting error here???
	function toggleTheming(event) {
		if (event.target.checked) {
			document.body.classList.add('dark-theme');
			document.body.classList.remove('light-theme');
			prefersDarkTheme = true;
		} else {
			document.body.classList.remove('dark-theme');
			document.body.classList.add('light-theme');
			prefersDarkTheme = false;
		}
		document.body.classList.add('user-override');
	}
</script>

<div id="toggle-container">
	<input
		type="checkbox"
		id="theme-toggle"
		bind:checked={prefersDarkTheme}
		on:change={toggleTheming}
	/>

	<label for="theme-toggle">
		<div id="switch-graphic-container">
			<div id="sun">
				{#each Array(8) as _, index (index)}
					<div class="rays" id="ray{index + 1}" />
				{/each}
			</div>
			<div id="moon" />
		</div>

		<div class="theme-labels" id="light-label">{lightThemeLabel}</div>
		<div class="theme-labels" id="dark-label">{darkThemeLabel}</div>
	</label>
</div>

<style>
	* {
		transition: all var(--td-medium-4) var(--te-emphasized);
	}

	#toggle-container {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#theme-toggle {
		height: 0;
		width: 0;
		position: absolute;
		opacity: 0;
	}

	#theme-toggle:focus ~ label {
		outline: 2px solid var(--c-accent-modes);
	}

	#theme-toggle:checked ~ label #switch-graphic-container {
		background: var(--c-toggle-sky-night);
	}

	#theme-toggle:checked ~ label #sun {
		top: 3px;
		left: 64px;
		background: transparent;
		transform: scale(0.3);
	}

	#theme-toggle:checked ~ label .rays {
		border-left: 6px solid transparent;
		border-right: 6px solid transparent;
		border-bottom: 24px solid var(--c-toggle-star);
	}

	#theme-toggle:checked ~ label #ray1 {
		transform: rotate(45deg) translate(-6px, -20px);
	}

	#theme-toggle:checked ~ label #ray2 {
		transform: rotate(90deg) translate(-6px, -24px);
	}

	#theme-toggle:checked ~ label #ray3 {
		transform: rotate(135deg) translate(-6px, -20px);
	}

	#theme-toggle:checked ~ label #ray4 {
		transform: rotate(180deg) translate(-6px, -24px);
	}

	#theme-toggle:checked ~ label #ray5 {
		transform: rotate(225deg) translate(-6px, -20px);
	}

	#theme-toggle:checked ~ label #ray6 {
		transform: rotate(270deg) translate(-6px, -24px);
	}

	#theme-toggle:checked ~ label #ray7 {
		transform: rotate(315deg) translate(-6px, -20px);
	}

	#theme-toggle:checked ~ label #ray8 {
		transform: rotate(360deg) translate(-6px, -24px);
	}

	#theme-toggle:checked ~ label #moon {
		bottom: 7px;
	}

	#theme-toggle:checked ~ label #moon::before {
		background: var(--c-toggle-sky-night);
	}

	label {
		width: 100%;
		border-radius: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	#switch-graphic-container {
		height: 56px;
		width: 116px;
		border-radius: 28px;
		display: block;
		position: relative;
		order: 2;
		overflow: hidden;
		background: var(--c-toggle-sky-day);
		border: 1px solid rgba(255, 255, 255, 0.4); /* css custom property? */
	}

	#sun {
		height: 30px;
		width: 30px;
		border-radius: 15px;
		position: absolute;
		top: 13px;
		left: 13px;
		z-index: 1;
		background: var(--c-toggle-sun);
		transform: scale(1);
	}

	.rays {
		height: 0;
		width: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		border-left: 8px solid transparent;
		border-right: 8px solid transparent;
		border-bottom: 24px solid var(--c-toggle-sun);
		transform-origin: 0 0;
	}

	#ray1 {
		transform: rotate(45deg) translate(-8px, -22px);
	}

	#ray2 {
		transform: rotate(90deg) translate(-8px, -22px);
	}

	#ray3 {
		transform: rotate(135deg) translate(-8px, -22px);
	}

	#ray4 {
		transform: rotate(180deg) translate(-8px, -22px);
	}

	#ray5 {
		transform: rotate(225deg) translate(-8px, -22px);
	}

	#ray6 {
		transform: rotate(270deg) translate(-8px, -22px);
	}

	#ray7 {
		transform: rotate(315deg) translate(-8px, -22px);
	}

	#ray8 {
		transform: rotate(360deg) translate(-8px, -22px);
	}

	#moon {
		height: 40px;
		width: 40px;
		border-radius: 20px;
		position: absolute;
		right: 7px;
		bottom: -52px;
		background: var(--c-toggle-moon);
	}

	#moon::before {
		height: 40px;
		width: 40px;
		border-radius: 20px;
		position: absolute;
		top: -12px;
		left: -17px;
		content: '';
		background: var(--c-toggle-sky-day);
		transition: all var(--td-medium-4) var(--te-emphasized);
	}

	.theme-labels {
		color: var(--c-text-nav);
		font-weight: var(--fw-light);
		margin: 5px;
		cursor: pointer;
		user-select: none;
	}

	#light-label {
		order: 1;
	}

	#dark-label {
		order: 3;
	}

	@media (min-width: 768px) {
		#toggle-container {
			border-radius: 10px;
			padding: 0 12px;
		}

		label {
			border-radius: 10px;
		}
	}
</style>