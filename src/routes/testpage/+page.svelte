<script>
	import Button from '$lib/components/Button.svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';
</script>

<div class="wrapper">
	<h1>Testing page</h1>
	<p>This page is meant exclusively for development... how'd you get here lol?</p>

	<h2>Buttons</h2>
	<div class="container">
		<div class="subcontainer">
			<Button name="Filled Enabled" buttonType="filled" />
			<Button name="Tonal Enabled" buttonType="tonal" />
			<Button name="Text Enabled" buttonType="text" />
		</div>
		<div class="subcontainer">
			<Button name="Filled Disabled" buttonType="filled" disabled={true} />
			<Button name="Tonal Disabled" buttonType="tonal" disabled={true} />
			<Button name="Text Disabled" buttonType="text" disabled={true} />
		</div>
		<div class="subcontainer">
			<Button name="Icon Filled Enabled" buttonType="filled" icon="checked-calendar" />
			<Button name="Icon Tonal Enabled" buttonType="tonal" icon="checked-calendar" />
			<Button name="Icon Text Enabled" buttonType="text" icon="checked-calendar" />
		</div>
		<div class="subcontainer">
			<Button name="Icon Filled Disabled" buttonType="filled" icon="checked-calendar" disabled={true} />
			<Button name="Icon Tonal Disabled" buttonType="tonal" icon="checked-calendar" disabled={true} />
			<Button name="Icon Text Disabled" buttonType="text" icon="checked-calendar" disabled={true} />
		</div>
	</div>

	<h2>Checkboxes</h2>
	<div class="container">
		<Checkbox name="Checkbox-Enabled" />
		<Checkbox name="Checkbox-Disabled" disabled={true} />
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 24px;
		border-radius: 24px;
		border: 2px solid var(--c-background-nav);
	}

	.subcontainer {
		display: flex;
		flex-direction: row;
		gap: 2rem;
	}
</style>
