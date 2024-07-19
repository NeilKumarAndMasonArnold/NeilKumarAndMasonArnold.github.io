<script>
	export let stage = 4;
	export let guestsInfo;

	import Button from '$lib/components/Button.svelte';

	let handleSubmit = () => {
		console.log('Submitted!');
		stage = 0;
	};

	const getButtonType = (guest, button) => {
		const buttonTypes = {
			accept: {
				Invited: 'outlined',
				Attending: 'filled',
				Declined: 'outlined'
			},
			decline: {
				Invited: 'outlined',
				Attending: 'outlined',
				Declined: 'tonal'
			}
		};

		return buttonTypes[button]?.[guest.Ceremony] || null;
	};

	const getIcon = (guest, button) => {
		const iconMap = {
			accept: {
				Attending: 'checked-calendar',
				default: 'placeholder'
			},
			decline: {
				Declined: 'checked-calendar',
				default: 'placeholder'
			}
		};

		return iconMap[button]?.[guest.Ceremony] || iconMap[button]?.default || '';
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<div class="infotext">
		<h1>Mason and Neil's Wedding Ceremony</h1>
		<p class="subtitle">Sunday, August 17th, 2025</p>
		<p>Who all will be attending the wedding ceremony?</p>
	</div>

	<div class="guest-grid">
		{#each guestsInfo as guest}
			<div class="guest-name">{guest['First Name']} {guest['Last Name']}</div>
			{#key guest.Ceremony}<div class="guest-buttons">
				<Button
					buttonType={getButtonType(guest, 'accept')}
					icon={getIcon(guest, 'accept')}
					name="ACCEPT"
					onClickFunc={() => {
						guest.Ceremony = 'Attending';
					}}
				/>
				<Button
					buttonType={getButtonType(guest, 'decline')}
					icon={getIcon(guest, 'decline')}
					name="DECLINE"
					onClickFunc={() => {
						guest.Ceremony = 'Declined';
					}}
				/>
			</div>{/key}
		{/each}
	</div>

	<Button buttonType="filled" name="CONTINUE" type="submit" onClickFunc={handleSubmit} />
</form>

<style>
	form {
		background: var(--c-background-main);
		max-width: 500px;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.infotext {
		margin-bottom: 1rem;
	}

	h1 {
		margin-bottom: 1rem;
	}

	.subtitle {
		margin-bottom: 1rem;
	}

	.guest-grid {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 1rem;
		align-items: center;
		align-self: center;
		width: max-content;
	}

	.guest-name {
		font-weight: bold;
		justify-self: start;
	}

	.guest-buttons {
		display: flex;
		gap: 0.5rem;
	}
</style>
