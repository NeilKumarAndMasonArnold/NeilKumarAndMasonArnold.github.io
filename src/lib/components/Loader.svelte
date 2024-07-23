<!--
LOERuthaseonuthasotuneha.suhadbesknthqeus;thkda.spunhtosenuthaoenu
-->

<script>
	export let customMsg = "Loading...";
</script>

<div class="loader" data-content={customMsg} />

<style>
	.loader {
		height: 1.2rem;
		text-shadow:
			0 0 0 red,
			0 0 0 green,
			0 0 0 blue;
		font-weight: var(--fw-bold);
		font-size: 30px;
		animation: spiderverse 1s infinite cubic-bezier(0.5,-2000,0.5,2000);
	}

	.loader::before {
		content: attr(data-content);
	}

	@keyframes spiderverse {
		25%,
		100% {
			text-shadow:
				0.03px -0.01px 0.01px red,
				0.02px 0.02px 0 green,
				-0.02px 0.02px 0 blue;
		}
	}
</style>