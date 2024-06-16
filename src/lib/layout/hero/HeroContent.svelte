<!--
Hero Content Component (HeroImage.svelte)
Renders the hero content responsively including the title and call to action.

Author: Neil A. Kumar
Status: Ongoing
-->

<script>
	import Button from '$lib/components/Button.svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

<div class="hero-content" in:fly={{ y: 20, easing: quintOut, duration: 750 }}>
	<h1>
		<span class="mason">Mason Arnold</span><br />
		and <span class="neil">Neil Kumar</span>
	</h1>

	<p>All you need to know about our big day:</p>

	<div class="call-to-action">
		<Button
			fill="var(--c-text-hover)"
			href="/rsvp"
			icon="open-envelope-with-document"
			type="filled"
			name="RSVP"
		/>

		<div class="secondary-button">
			<Button
				fill="var(--c-text-tonal)"
				href="/about/schedule"
				icon="checked-calendar"
				type="tonal"
				name="Schedule"
			/>
		</div>
	</div>
</div>

<style>
	div.hero-content {
		align-items: center;
		padding-bottom: 0;
	}

	h1 {
		color: var(--c-text-main);
		font-size: var(--fs-extra-large);
		margin-bottom: 1.5rem;
	}

	h1 span.mason {
		color: var(--c-accent-mason);
	}

	h1 span.neil {
		color: var(--c-accent-neil);
		display: inline-block;
	}

	h1 br {
		content: ' ';
	}

	p {
		font-size: var(--fs-normal);
		margin-bottom: 2rem;
		color: var(--c-text-main);
	}

	div.call-to-action {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		user-select: none;
	}

	.secondary-button {
		display: none;
	}

	@media (min-width: 550px) {
		div.call-to-action {
			flex-direction: row;
			justify-content: center;
		}

		.secondary-button {
			height: max-content;
			width: max-content;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 0;
			padding: 0;
		}
	}

	@media (min-width: 767px) {
		h1 br {
			content: normal;
		}
	}

	@media (min-width: 1052px) {
		div.hero-content {
			text-align: left;
		}

		div.call-to-action {
			justify-content: normal;
		}
	}
</style>
