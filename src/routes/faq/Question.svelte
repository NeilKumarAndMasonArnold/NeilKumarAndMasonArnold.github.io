<!--
FAQ Question Component (Question.svelte)
Renders a question-answer pair for the FAQ page with the answer as a drop-down.

Author: Neil A. Kumar (2024)
Status: Complete
-->

<script>
	export let questionNum;

	import { iconLibrary } from '$lib';
	import { quintOut } from 'svelte/easing';
	import { slide, fly } from 'svelte/transition';
	import Icon from '$lib/components/Icon.svelte';

	let expanded = false;
</script>

<div class="question-container" class:expanded in:fly={{ x: -10, easing: quintOut, duration: 750, delay: questionNum*250 }}>
	<div class="dropdown-container" class:closed={!expanded}>
		<div
			role="button"
			tabindex="0"
			aria-label="Open Question"
			aria-expanded={expanded}
			class="question"
			class:closed={!expanded}
			on:click={() => (expanded = !expanded)}
			on:keypress={() => (expanded = !expanded)}
		>
			<h4><slot name="question" /></h4>
			<div id="arrow" style:transform={expanded ? 'rotate(0deg)' : 'rotate(-180deg)'}>
				<Icon
					path={iconLibrary['dropdown'].path}
					fill="none"
					stroke="var(--c-text-nav)"
					stroke-width="3px"
					stroke-linecap="round"
					stroke-linejoin="round"
					viewBox={iconLibrary['dropdown'].viewBox}
				/>
			</div>
		</div>
	</div>

	{#if expanded}
		<div class="answer" transition:slide={{ easing: quintOut, duration: 500 }}>
			<slot name="answer" />
		</div>
	{/if}
</div>

<style>
	.question-container {
		border: 1px solid var(--c-text-main);
		border-radius: 20px;
		overflow: hidden;
	}

	.question-container.expanded {
		box-shadow: 0 9.3905074804px 15px var(--c-shadow-gallery);
	}

	.dropdown-container {
		background-color: var(--c-background-nav);
	}

	.question {
		align-items: center;
		background-color: transparent;
		border-bottom: 1px solid var(--c-text-main);
		border-radius: 0;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		padding: 0.75rem 1rem;
	}

	.question:hover {
		background-color: var(--c-background-hover);
	}

	.closed {
		border-bottom: 0 solid var(--c-text-main);
		border-radius: 20px;
	}

	#arrow {
		height: var(--fs-large);
		user-select: none;
	}

	.answer {
		margin: 0.5rem;
		justify-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1rem;
	}

	@media (min-width: 767px) {
		.answer {
			gap: normal;
		}
	}
</style>