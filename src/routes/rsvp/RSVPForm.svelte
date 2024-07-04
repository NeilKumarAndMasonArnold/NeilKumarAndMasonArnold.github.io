<!--
RSVP Form Component (RSVPForm.svelte)
idk

Author: Neil A. Kumar (2024)
Status: Ongoing
-->

<script>
	export let currentStage = 'GuestID';
	export let stageNum = 1;
	export let progressBar;

	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import InputField from '$lib/components/InputField.svelte';
	import Loader from '$lib/components/Loader.svelte';

	let guestInfo = null;
	let errMessage = '';
	let errSuggestion = '';
	let dataloading = false;
	let rsvpData = {
		ID: '',
		Name: '',
		RSVP: '',
		Attending: ''
	};

	const validateGuestID = (inputtedID) => {
		const regex = /^[A-Za-z]{2}[0-9]{2}$/;
		return regex.test(inputtedID);
	};

	export const getGuestInfo = async () => {
		// Reset variables
		guestInfo = null;
		errMessage = '';

		// First validate the input
		if (!validateGuestID(rsvpData.ID)) {
			errMessage = 'Invalid guest ID';
			errSuggestion = 'Your guest ID should be 2 letters followed by 2 numbers';
			return false;
		}

		// Let the user know that we will now fetch the data
		dataloading = true;

		// If validation passes, return a Promise
		try {
			// Make the data fetch request and wait for a response
			const guestInfoResponse = await fetch(
				`https://script.google.com/macros/s/AKfycbxSWfyv2RkFgNCvFY1A1a3Xmymcye2GI-pCHUMpD0ph_Jtm-_7Nl5zkKvzLo7qgACkIOQ/exec?guestID=${rsvpData.ID}`
			);

			// If something goes wrong, display an error
			if (!guestInfoResponse.ok) {
				errMessage = "Something went wrong and we're not sure what!";
				errSuggestion = 'Check the console for more information';
				console.log(guestInfoResponse);
				dataloading = false;
				return false;
			}

			// Otherwise, get the content type of the response so we can parse it
			const contentType = guestInfoResponse.headers.get('content-type');
			if (contentType.includes('text')) {
				// If the content is text, provide the text error to the user
				errMessage = await guestInfoResponse.text();
				errSuggestion =
					'Did you enter the right code? If you continue to face difficulties, email us at [email will be here]';
				dataloading = false;
				return false;
			} else if (contentType.includes('json')) {
				// If it's json, we've got the guest info!
				guestInfo = await guestInfoResponse.json();
				rsvpData.Name = guestInfo[1];
				rsvpData.RSVP = guestInfo[2];
				dataloading = false;
				return true;
			} else {
				// This shouldn't happen. So if we're here we need an error and some useful debugging information
				errMessage =
					'Unexpected content type from API call response. Check the console for more details.';
				errSuggestion =
					"This shouldn't happen... but if you're seeing this, clearly it did.  Do me a favor and open the console (usually by pressing 'Ctrl+Shift+J' on Windows and 'Cmd+Shift+J' on MacOS) and send me a screenshot so I can figure out how I messed up the code! Thanks for the help and I'm sorry I messed this up for you!  Side note: if you're using linux and can't open the js console, I want to know how this happened lol.";
				console.log('ContentType: ' + contentType);
				console.log('Promise Response: ');
				console.log(guestInfoResponse);
				dataloading = false;
				return false;
			}
		} catch (err) {
			errMessage = 'An error occured while fetching the guest data.';
			errSuggestion = `Ensure that your cotent blocker or adblocker are allowing the following domains: <ul style="margin-left: 1rem; list-style: inside;"><li>scripts.google.com</li><li>scripts.googleusercontent.com</li></ul>`;
			console.log(err);
			dataloading = false;
			return false;
		}
	};

	const handleSubmit = async () => {
		if (stageNum == 1) {
			let moveOn = await getGuestInfo();
			if (moveOn) {
				stageNum++;
				progressBar.handleProgress(+1)
			}
		} else {
			stageNum++;
			progressBar.handleProgress(+1);
		}
	}
</script>

<form on:submit={handleSubmit}>
	{#if currentStage == 'GuestID'}
		<div class="form-wrapper" in:fly={{ x: 50, duration: 1000, easing: quintOut }}>
			<h2>Who are you?</h2>
			<InputField bind:value={rsvpData.ID} label="Enter Your Guest ID" />
			{#if dataloading}
				<div class="loader">
					<Loader />
				</div>
			{:else if errMessage}
				<div class="error" in:fly={{ y: 20, duration: 200, easing: quintOut }}>
					<span>Error:</span>
					<p>
						{errMessage}
					</p>
				</div>
				<div class="suggestion" in:fly={{ y: 20, duration: 200, easing: quintOut, delay: 100 }}>
					<span>Suggestion:</span>
					<p>
						{@html errSuggestion}
					</p>
				</div>
			{/if}
		</div>
	{:else if currentStage == 'GuestInfo'}
		<div class="form-wrapper" in:fly={{ x: 50, duration: 1000, easing: quintOut }}>
			<h2>Guest Information</h2>
			<p>Name: {rsvpData.Name}</p>
			<p>RSVP Completed: {rsvpData.RSVP ? 'Yes' : 'No'}</p>
		</div>
	{:else if currentStage == 'GuestInfo2'}
		<div class="form-wrapper" in:fly={{ x: 50, duration: 1000, easing: quintOut }}>
			<div>
				<h2>Testing!</h2>
				<p>Hello</p>
				<p>World!</p>
			</div>
		</div>
	{/if}
</form>

<style>
	form {
		width: 60vw;
		min-height: 30vh;
		border-radius: 20px;
		margin-bottom: 2rem;
	}

	.form-wrapper {
		height: 100%;
		width: 100%;
		border-radius: 20px;
		padding: 20px 20px;
		background: var(--c-background-nav);
		box-shadow: 0 9.3905074804px 15px var(--c-shadow-gallery);
	}

	h2 {
		margin-bottom: 2rem;
		padding-bottom: 1rem;
		border-bottom: 2px solid var(--c-text-main);
	}

	.loader {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 2rem;
	}

	p {
		color: var(--c-text-main);
	}

	.error {
		background: #ffdddd;
		border-left: 6px solid #f44336;
		color: black;
		text-align: left;
		margin: 0.5rem;
		margin-bottom: 0;
		padding: 0.5rem;
	}

	.suggestion {
		background: #f2f2f2;
		border-left: 6px solid #dddddd;
		color: black;
		text-align: left;
		margin: 0.5rem;
		margin-top: 0;
		padding: 0.5rem;
	}

	span {
		margin-bottom: 0.1rem;
		font-weight: var(--fw-bold);
	}

	.error p,
	.suggestion p {
		margin: 0.5rem;
		margin-left: 1rem;
		color: black;
	}
</style>
