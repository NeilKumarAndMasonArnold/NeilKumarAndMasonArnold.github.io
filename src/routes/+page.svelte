<script>
	import HeroImage from '$lib/layout/hero/HeroImage.svelte';
	import HeroContent from '$lib/layout/hero/HeroContent.svelte';
	// import Wave from '$lib/components/Wave.svelte';
</script>

<div class="content-wrapper">
	<HeroImage />
	<HeroContent />
	<!-- <Wave /> -->
</div>

<style>
	.content-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	@media (min-width: 767px) {
		.content-wrapper {
			height: calc(100vh - 80px);
			flex-direction: row-reverse;
			gap: 5vw;
		}
	}
</style>
