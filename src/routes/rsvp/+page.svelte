<script>
	//@ts-nocheck
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import RSVPForm from './RSVPForm.svelte';
	import Button from '$lib/components/Button.svelte';
	import ProgressBar from './ProgressBar.svelte';

	let stages = ['GuestID', 'GuestInfo', 'GuestInfo2'];
	let currentStage = 1;
	let moveOn;
	let progressBar, rsvpForm;

	const handleProgress = async (stepIncrement) => {
		if (currentStage == 1) {
			moveOn = await rsvpForm.getGuestInfo();
			if (moveOn) {
				progressBar.handleProgress(stepIncrement);
			}
		} else {
			progressBar.handleProgress(stepIncrement);
		}
	};
</script>

<svelte:head>
	<title>RSVP</title>
</svelte:head>

<div class="wrapper" in:fly={{ y: 10, easing: quintOut, duration: 750 }}>
	<ProgressBar {stages} bind:currentStage bind:this={progressBar} />
	<RSVPForm
		currentStage={stages[currentStage - 1]}
		bind:stageNum={currentStage}
		bind:progressBar
		bind:this={rsvpForm}
	/>

	<div class="stageButtons">
		<Button
			buttonType="tonal"
			name="Prev"
			onClickFunc={() => handleProgress(-1)}
			disabled={currentStage == 1}
		/>
		<Button
			buttonType="filled"
			name="Next"
			onClickFunc={() => handleProgress(+1)}
			disabled={currentStage == stages.length}
			type="submit"
		/>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 30px;
		width: 100%;
		max-width: 750px;
	}

	.stageButtons {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
</style>
