<script>
	import Button from '$lib/components/Button.svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
	import RadioInput from '$lib/components/RadioInput.svelte';

	let selectedOption = '2';
</script>

<div class="wrapper">
	<h1>Testing page</h1>
	<p>This page is meant exclusively for development... how'd you get here lol?</p>

	<div class="subwrapper">
		<h2>Buttons</h2>
		<div class="container">
			<div class="subcontainer">
				<Button name="Filled Enabled" buttonType="filled" />
				<Button name="Outlined Enabled" buttonType="outlined" />
				<Button name="Tonal Enabled" buttonType="tonal" />
				<Button name="Text Enabled" buttonType="text" />
			</div>
			<div class="subcontainer">
				<Button name="Filled Disabled" buttonType="filled" disabled />
				<Button name="Outlined Disabled" buttonType="outlined" disabled />
				<Button name="Tonal Disabled" buttonType="tonal" disabled />
				<Button name="Text Disabled" buttonType="text" disabled />
			</div>
			<div class="subcontainer">
				<Button name="Icon Filled Enabled" buttonType="filled" icon="checked-calendar" />
				<Button name="Icon Outlined Enabled" buttonType="outlined" icon="checked-calendar" />
				<Button name="Icon Tonal Enabled" buttonType="tonal" icon="checked-calendar" />
				<Button name="Icon Text Enabled" buttonType="text" icon="checked-calendar" />
			</div>
			<div class="subcontainer">
				<Button name="Icon Filled Disabled" buttonType="filled" icon="checked-calendar" disabled />
				<Button name="Icon Outlined Disabled" buttonType="outlined" icon="checked-calendar" disabled />
				<Button name="Icon Tonal Disabled" buttonType="tonal" icon="checked-calendar" disabled />
				<Button name="Icon Text Disabled" buttonType="text" icon="checked-calendar" disabled />
			</div>
		</div>
	</div>

	<div class="subwrapper">
		<h2>Checkboxes</h2>
		<div class="container">
			<div class="subcontainer">
				<Checkbox name="Checkbox Enabled" />
				<Checkbox name="Checkbox Enabled Checked" checked={true} />
			</div>
			<div class="subcontainer">
				<Checkbox name="Checkbox Disabled" disabled />
				<Checkbox name="Checkbox Disabled Checked" checked={true} disabled />
			</div>
		</div>
	</div>

	<div class="subwrapper">
		<h2>Text Input</h2>
		<div class="container">
			<div class="subcontainer">
				<TextInput type="outlined" label="Enabled Outlined" />
				<TextInput type="outlined" label="Enabled Outlined w/ Input" value="Inputted Text"/>
				<TextInput type="outlined" label="Error Enabled Outlined" error="Error Message" />
				<TextInput type="outlined" label="Error Enabled Outlined w/ Input" value="Inputted Text" error="Error Message" />
			</div>
			<div class="subcontainer">
				<TextInput type="outlined" label="Disabled Outlined" disabled />
				<TextInput type="outlined" label="Disabled Outlined w/ Input" value="Inputted Text" disabled />
				<TextInput type="outlined" label="Error Disabled Outlined" error="Error Message" disabled />
				<TextInput type="outlined" label="Error Disabled Outlined /w Input" value="Inputted Text" error="Error Message" disabled />
			</div>
			<div class="subcontainer">
				<TextInput type="filled" label="Enabled Filled" />
				<TextInput type="filled" label="Enabled Filled w/ Input" value="Inputted Text" />
				<TextInput type="filled" label="Error Enabled Filled" error="Error Message" />
				<TextInput type="filled" label="Error Enabled Filled w/ Input" value="Inputted Text" error="Error Message" />
			</div>
			<div class="subcontainer">
				<TextInput type="filled" label="Disabled Filled" disabled />
				<TextInput type="filled" label="Disabled Filled w/ Input" value="Inputted Text" disabled />
				<TextInput type="filled" label="Error Disabled Filled" error="Error Message" disabled />
				<TextInput type="filled" label="Error Disabled Filled w/ Input" value="Inputted Text" error="Error Message" disabled />
			</div>
		</div>
	</div>

	<div class="subwrapper">
		<h2>Radio Buttons</h2>
		<div class="container">
			<div class="subcontainer">
				<div class="radio-buttons">
					<RadioInput value='1' bind:group={selectedOption} label="Enabled Unselected Radio Button" />
					<RadioInput value='2' bind:group={selectedOption} label="Enabled Selected Radio Button" />
					<RadioInput value='3' bind:group={selectedOption} label="Disabled Radio Button" disabled />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	h2 {
		text-align: left;
		margin-bottom: 1rem;
		margin-left: 1rem;
	}

	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 24px;
		border-radius: 24px;
		border: 2px solid var(--c-background-nav);
	}

	.subcontainer {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 2rem;
		background: var(--c-background-main);
		justify-content: space-around;
	}

	.radio-buttons {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
