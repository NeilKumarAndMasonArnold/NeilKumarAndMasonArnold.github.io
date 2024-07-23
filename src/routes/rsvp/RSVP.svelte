<script>
	export let stage = 4;
	export let guestsInfo;
	export let eventsList = [
		'Ceremony',
		'Sangeet / Reception',
		'Mehendi',
		'Bachelor Party',
		'Bachelorette Party'
	];
	export let rsvpData = {};

	import Button from '$lib/components/Button.svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let events = [];
	let currentEvent = 0;
	let changes = {};

	$: currentGuests = guestsInfo.filter(guest => guest[events[currentEvent]] != 'Not Invited');
	$: updateChanges(guestsInfo);

	onMount(() => {
		// Initialize Events
		events = eventsList.filter(event => guestsInfo.some(guest => guest[event] !== 'Not Invited'));

		// Initialize Party RSVP Status
		guestsInfo.forEach(guest => {
			events.forEach(event => {
				if(!guest.hasOwnProperty(`original_${event}`)) {
					guest[`original_${event}`] = guest[event];
				}
			});
		});
	});

	function updateChanges(guestsInfo) {
		changes = guestsInfo.reduce((acc, guest) => {
			events.forEach(event => {
				const key = createGuestEventKey(guest, event);
				if (guest[event] !== guest[`original_${event}`]) {
					acc[key] = {
						guestName: `${guest['First Name']} ${guest['Last Name']}`,
						event,
						oldStatus: guest[`original_${event}`],
						newStatus: guest[event]
					};
				} else {
					delete acc[key];
				}
			});
			return acc;
		}, {});
	}

	function createGuestEventKey(guest, event) {
		return `${guest['First Name']} ${guest['Last Name']}_${event}`;
	}

	function nextEvent() {
		if (currentEvent < events.length - 1) {
			currentEvent++;
		}
	}

	function previousEvent() {
		if (currentEvent > 0) {
			currentEvent--;
		}
	}

	function getButtonProps(guest, action) {
		const status = guest[events[currentEvent]];

		const buttonTypes = {
			accept: {
				Invited: 'outlined',
				Attending: 'filled',
				Declined: 'outlined'
			},
			decline: {
				Invited: 'outlined',
				Attending: 'outlined',
				Declined: 'filled'
			}
		};

		const icons = {
			accept: {
				Attending: 'yes',
				default: 'placeholder'
			},
			decline: {
				Declined: 'no',
				default: 'placeholder'
			}
		};

		const colorSchemes = {
			accept: {
				Invited: {
					customTextColor: 'var(--c-text-tonal)',
					customOutlineColor: 'var(--c-text-tonal)'
				},
				Attending: {},
				Declined: {
					customTextColor: 'var(--c-background-disabled)',
					customOutlineColor: 'var(--c-background-disabled)'
				}
			},
			decline: {
				Invited: {
					customTextColor: 'var(--c-text-tonal)',
					customOutlineColor: 'var(--c-text-tonal)'
				},
				Attending: {
					customTextColor: 'var(--c-background-disabled)',
					customOutlineColor: 'var(--c-background-disabled)'
				},
				Declined: {
					customTextColor: 'var(--c-text-nav)',
					customBackgroundColor: 'var(--c-background-disabled)'
				}
			}
		};

		return {
			buttonType: buttonTypes[action][status],
			icon: icons[action][status] || icons[action].default,
			...colorSchemes[action][status]
		};
	}

	function handleButtonClick(guest, newStatus) {
		const index = guestsInfo.findIndex(
			g => g['First Name'] === guest['First Name'] && g['Last Name'] === guest['Last Name']
		);
		if (index !== -1) {
			guestsInfo[index] = { ...guestsInfo[index], [events[currentEvent]]: newStatus };
		}
	}

	function handleSubmit() {
		rsvpData = changes;
		stage = 5;
	}
</script>

<form>
	<div class="info-text">
		<h1>Mason and Neil's Wedding {events[currentEvent]}</h1>
		<p class="subtitle">Sunday, August 17th, 2025</p>
		<p>Who all will be attending the {events[currentEvent]}?</p>
	</div>

	{#key currentEvent}
		<div class="guest-grid" in:fly|global={{ x: 75, easing: quintOut, duration: 500 }}>
			{#each currentGuests as guest (guest['First Name'] + guest['Last Name'])}
				<div class="guest-name">{guest['First Name']} {guest['Last Name']}</div>
				<div class="guest-buttons">
					<Button
						{...getButtonProps(guest, 'accept')}
						iconLocation="left"
						name="ACCEPT"
						onClickFunc={() => handleButtonClick(guest, 'Attending')}
					/>
					<Button
						{...getButtonProps(guest, 'decline')}
						iconLocation="right"
						name="DECLINE"
						onClickFunc={() => handleButtonClick(guest, 'Declined')}
					/>
				</div>
			{/each}
		</div>
	{/key}

	<div class="form-nav-buttons">
		{#if currentEvent < events.length - 1}
			<Button
				buttonType="filled"
				name="CONTINUE"
				onClickFunc={nextEvent}
				icon="forward"
				iconLocation="right"
			/>
		{:else}
			<Button
				buttonType="filled"
				name="SEND RSVP"
				type="submit"
				onClickFunc={handleSubmit}
				icon="rsvp-submit"
				iconLocation="right"
			/>
		{/if}
		{#if currentEvent > 0}
			<Button buttonType="tonal" name="PREVIOUS" onClickFunc={previousEvent} icon="backward" />
		{/if}
	</div>
</form>

<style>
	form {
		background: var(--c-background-main);
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		height: 100%;
		justify-content: space-between;
	}

	.info-text {
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}

	h1,
	.subtitle {
		margin-bottom: 0.5rem;
	}

	.guest-grid {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		background: var(--c-background-nav);
		padding: 1rem;
		border-radius: 25px;
	}

	.guest-name {
		font-weight: bold;
		justify-self: start;
		margin-top: 0.5rem;
	}

	.guest-buttons {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		justify-content: center;
		margin-bottom: 0.5rem;
	}

	.form-nav-buttons {
		display: flex;
		flex-direction: row-reverse;
		gap: 0.5rem;
		margin-top: 0.5rem;
		justify-content: space-between;
	}

	@media (min-width: 767px) {
		form {
			width: 500px;
			max-width: max-content;
			justify-content: center;
		}

		.info-text {
			margin-top: 1rem;
			margin-bottom: 1rem;
		}

		h1,
		.subtitle {
			margin-bottom: 1rem;
		}

		.guest-grid {
			display: grid;
			grid-template-columns: 1fr auto;
			gap: 1rem;
			width: 500px;
			padding: 1rem;
		}

		.guest-name {
			justify-self: center;
			align-self: center;
			margin-top: 0;
		}

		.guest-buttons {
			margin-bottom: 0;
		}
	}
</style>
