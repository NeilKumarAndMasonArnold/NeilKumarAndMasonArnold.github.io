<!--
Form Progress Bar Component (ProgressBar.svelte)

Author: Neil A. Kumar (2024)
Status: Ongoing
-->

<script>
	//@ts-nocheck
	export let stages = [];
	export let currentStage = 1;
	let stageNumbers, progress;

	export const handleProgress = (stepIncrement) => {
		stageNumbers = document.querySelectorAll('.circle');
		if ((stepIncrement == 1)) {
			currentStage++;
			if (currentStage > stageNumbers.length) {
				currentStage = stageNumbers.length;
			}
		} else {
			currentStage--;
			if (currentStage <= 1) {
				currentStage = 1;
			}
		}
		update();
	};

	function update() {
		stageNumbers.forEach((stage, idx) => {
			if (idx < currentStage) {
				stage.classList.add('active');
			} else {
				stage.classList.remove('active');
			}
		});

		const actives = document.querySelectorAll('.active');
		progress.style.width = (actives.length - 1) / (stageNumbers.length - 1) * 100 + '%';
	}
</script>

<div class="container" bind:this={stageNumbers}>
	<div class="progress" bind:this={progress} />
	{#each stages as stage, i}
		<div class="circle" class:active={i == 0} data-title={stage}>{i + 1}</div>
	{/each}
</div>

<style>
	.container {
		width: 90%;
		display: flex;
		justify-content: space-between;
		position: relative;
		margin-bottom: 30px;
	}

	.container::before {
		content: '';
		background: var(--c-background-nav);
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		height: 4px;
		width: 100%;
		z-index: -1;
	}

	.progress {
		background: var(--c-background-active);
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		height: 4px;
		width: 0%;
		z-index: -1;
		transition: 0.4s ease;
	}

	.circle {
		background: var(--c-background-main);
		color: var(--c-text-main);
		border-radius: 50%;
		height: 30px;
		width: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 3px solid var(--c-background-nav);
		/* transition: 0.4s ease; */
	}

	.circle::after {
		content: attr(data-title) ' ';
		position: absolute;
		bottom: 35px;
		color: var(--c-text-main);
		/* transition: 0.4s ease; */
	}

	.circle.active {
		border: 3px solid var(--c-background-active);
		font-weight: var(--fw-bold);
	}

	.circle.active::after {
		color: var(--c-background-active);
	}
</style>
