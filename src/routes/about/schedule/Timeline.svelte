<!--
sanotehusantoehusanotehu

Authon: Neil A. Kumar
Status: ongoing
-->

<script>
	export let events = [];

	import { onMount } from 'svelte';
	import TimelineEvent from './TimelineEvent.svelte';

	let visible = false;

	const delayTime = 100;

	onMount(() => {
		visible = true;
	});
</script>

<div class="timeline" class:visible style="--animation-time: {events.length * delayTime}ms">
	{#each events as { title, date, description }, index}
		<div
			class="container {index % 2 === 0 ? 'left' : 'right'}"
			class:visible
			style="--item-delay: {index * delayTime}ms"
		>
			<TimelineEvent {title} {date} {index}>{description}</TimelineEvent>
		</div>
	{/each}
</div>

<style>
	.timeline {
		height: 100%;
		width: 100%;
		max-width: 1200px;
		position: relative;
		--line-width: 6px;
		--line-offset: 16px;
		--line-event-space: 40px;
		--event-event-space: 10px;
		--event-border-radius: 10px;
		--event-marker-border: 4px;
		--event-carrot-height: 10px;
	}

	.timeline::after {
		content: '';
		width: var(--line-width);
		height: 0;
		position: absolute;
		top: 0;
		bottom: 0;
		left: var(--line-offset);
		margin-left: calc(-1 * var(--line-width) / 2);
		background: var(--c-background-nav);
	}
	
	.timeline.visible::after {
		height: 100%;
		transition: height var(--animation-time);
	}

	.container {
		width: 100%;
		position: relative;
		padding: calc(var(--event-event-space) / 2) var(--line-offset);
		padding-left: calc(var(--line-event-space) + var(--line-offset));
		background: var(--c-background-main);
		--event-marker-radius: 1px;
		--event-carrot-width: 1px;
	}

	.container.visible {
		--event-marker-radius: calc(15px - var(--event-marker-border));
		--event-carrot-width: 20px;
	}

	.container::after {
		content: '';
		border-radius: 50%;
		height: calc(var(--event-marker-radius) * 2);
		width: calc(var(--event-marker-radius) * 2);
		position: absolute;
		top: calc((var(--event-event-space) / 2) + var(--event-border-radius));
		left: calc(var(--line-offset) - var(--event-marker-border) - var(--event-marker-radius));
		z-index: 1;
		border: var(--event-marker-border) solid var(--c-background-active);
		background: var(--c-background-nav);
		transition: all var(--td-medium-4) var(--te-emphasized) var(--item-delay);
	}

	.container::before {
		content: ' ';
		height: 0;
		width: 0;
		position: absolute;
		top: calc(
			(var(--event-event-space) / 2) + var(--event-border-radius) + var(--event-marker-radius) -
				(var(--event-carrot-height) / 2)
		);
		left: calc(var(--line-event-space) - var(--event-carrot-width) + var(--line-offset));
		z-index: 1;
		border-style: solid;
		border-color: transparent;
		border-width: var(--event-carrot-height);
		border-right-width: var(--event-carrot-width);
		border-left-width: 0;
		border-right-color: var(--c-background-nav);
		transition:
			right var(--td-medium-4) var(--te-emphasized) var(--item-delay),
			left var(--td-medium-4) var(--te-emphasized) var(--item-delay),
			border-width var(--td-medium-4) var(--te-emphasized) var(--item-delay);
	}

	@media (min-width: 767px) {
		.timeline {
			--line-offset: 0px;
		}

		.timeline::after {
			left: 50%;
		}

		.container {
			width: 50%;
			padding: calc(var(--event-event-space) / 2) var(--line-event-space);
		}

		.right {
			left: 50%;
		}

		.right::after {
			left: calc(-1 * var(--event-marker-radius) - var(--event-marker-border));
		}

		.left::after {
			right: calc(-1 * var(--event-marker-radius) - var(--event-marker-border));
			left: auto;
		}

		.left::before {
			right: calc(var(--line-event-space) - var(--event-carrot-width));
			left: auto;
			border-right-width: 0;
			border-left-width: var(--event-carrot-width);
			border-left-color: var(--c-background-nav);
		}
	}
</style>
