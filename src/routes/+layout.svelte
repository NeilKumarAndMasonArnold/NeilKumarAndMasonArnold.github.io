<script>
	import Navigation from '$lib/layout/navigation/NavHost.svelte';
	import './global.css';
</script>

<Navigation />

<main>
	<div class="wrapper">
		<div id="mainContent">
			<slot />
		</div>
	</div>
</main>

<style>
	main {
		width: 100%;
		background: var(--c-background-main);
	}

	.wrapper {
		margin-inline: auto;
		width: 90%;
	}

	div#mainContent {
		height: max-content;
		min-height: calc(100vh - 80px);
		display: flex;
		justify-content: center;
		text-align: center;
		margin-top: 80px;
		padding: 40px 0;
		background: var(--c-background-main);
	}

	@media (min-width: 767px) {
		div#mainContent {
			flex-direction: row;
			gap: 5vw;
		}
	}

	@media (min-width: 1052) {
		div#mainContent {
			justify-content: center;
		}
	}

	@media (min-width: 1700) {
		.wrapper {
			width: min(87%, 100rem);
		}

		div#mainContent {
			gap: 5vw;
			justify-content: space-between;
		}
	}
</style>
