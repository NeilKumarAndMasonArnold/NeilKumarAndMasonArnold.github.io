<script>
	import Navigation from '$lib/layout/navigation/NavHost.svelte';
	import './global.css';
</script>

<Navigation />

<main>
	<div id="mainContent">
		<slot />
	</div>
</main>

<style>
	main {
		margin-inline: auto;
		margin-top: 7rem;
		width: 87%;
	}

	div#mainContent {
		display: flex;
		height: calc(65vh);
		justify-content: center;
		text-align: center;
	}

	@media (min-width: 767px) {
		div#mainContent {
			height: calc(100vh - 120px);
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
		main {
			width: min(87%, 100rem);
		}

		div#mainContent {
			gap: 5vw;
			justify-content: space-between;
		}
	}
</style>
