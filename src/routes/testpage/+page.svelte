<script>
	import Button from '$lib/components/Button.svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
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
		<Checkbox name="Checkbox Enabled" />
		<Checkbox name="Checkbox Disabled" disabled={true} />
	</div>

	<h2>Text Input</h2>
	<div class="container">
		<div class="subcontainer">
			<TextInput id="text1" label="Enabled" />
			<TextInput id="text2" label="Enabled With Input" value="Inputted Text"/>
			<TextInput id="text3" label="Error Enabled" error="Error Message" />
			<TextInput id="text4" label="Error Enabled With Input" value="Inputted Text" error="Error Message" />
		</div>
		<div class="subcontainer">
			<TextInput id="text5" label="Disabled" disabled={true} />
			<TextInput id="text6" label="Disabled With Input" value="Inputted Text" disabled={true} />
			<TextInput id="text7" label="Error Disabled" error="Error Message" disabled={true} />
			<TextInput id="text8" label="Error Disabled With Input" value="Inputted Text" error="Error Message" disabled={true} />
		</div>
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
		background: var(--c-background-main);
	}
</style>
