<script>
	export let stage = 6;
	export let submitStatus = '';

	import Button from '$lib/components/Button.svelte';
</script>

<div class="container">
	{#if submitStatus === 'RSVP submitted successfully!'}
		<div class="info-text">
			<h1>Success!!</h1>
			<p>Your RSVP changes were sent and updated in our database successfully!</p>
			<p>Would you like to return to the homepage?</p>
		</div>
		<div class="button-container">
			<Button buttonType="filled" name="HOMEPAGE" href="/" icon="home" />
		</div>
	{:else}
		<div class="info-text">
			<h1 class="error">Error!</h1>
			<p class="error">{submitStatus}</p>
		</div>
		<div class="button-container">
			<Button
				buttonType="tonal"
				name="INVITE SEARCH"
				onClickFunc={() => {
					stage = 0;
				}}
				icon="backward"
			/>
			<Button buttonType="filled" name="HOMEPAGE" href="/" icon="home" iconLocation="right" />
		</div>
	{/if}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		width: 100%;
		align-items: center;
	}

	.button-container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.info-text p {
		margin-top: 1rem;
	}

	.error {
		color: var(--c-text-error);
	}
</style>
