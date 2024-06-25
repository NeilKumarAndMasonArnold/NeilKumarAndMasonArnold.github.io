<!--
A Time Card Component (TimeCard.svelte)
Renders a flipping card component to represent some unit of time.render

Author: Neil A. Kumar
Status: Ongoing
-->

<script>
	export let callback;
	export let number;
	export let name;

	import { onMount, onDestroy } from 'svelte';

	$: numStringArray = convertToStringArray(number);

	const onInterval = (cb, timer) => {
		const interval = setInterval(cb, timer);

		onDestroy(() => clearInterval(interval));
	};

	let topFront = [];
	let topBack = [];
	let bottomFront = [];
	let bottomBack = [];

	function convertToStringArray(number) {
		let digitsRaw = number.toString().split('');
		let digitsLeadingZero = digitsRaw.length === 1 ? ['0', ...digitsRaw] : digitsRaw;

		return digitsLeadingZero;
	}

	const iterateNumbers = () => {
		topFront = numStringArray;
		topBack = numStringArray;
		bottomFront = numStringArray;
		bottomBack = numStringArray;
	};

	onMount(iterateNumbers);
	onInterval(callback, 1000);
</script>

<div class="container">
	{#key number}
		<div class="wrapper">
			<div class="top-back">
				{#each topFront as num}
					<span>{num}</span>
				{/each}
			</div>
			<div class="top-front" on:animationend={iterateNumbers}>
				{#each topBack as num}
					<span>{num}</span>
				{/each}
			</div>
			<div class="bottom-front">
				{#each bottomFront as num}
					<span>{num}</span>
				{/each}
			</div>
			<div class="bottom-back" on:animationend={iterateNumbers}>
				{#each bottomBack as num}
					<span>{num}</span>
				{/each}
			</div>
		</div>
	{/key}
	<p>{name}</p>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		border-radius: 7px;
		position: relative;
		box-shadow: 5px 10px 10px var(--c-shadow-gallery);
	}

	.top-back,
	.top-front,
	.bottom-front,
	.bottom-back {
		height: 0.65625rem;
		display: flex;
		justify-content: center;
		overflow: hidden;
		padding: 1.875rem 1.3125rem;
		background: var(--c-background-nav);
		line-height: 0.75;
	}

	.top-back,
	.top-front {
		border-radius: 7px 7px 0 0;
		border-bottom: 1px solid var(--c-shadow-flipper-crease);
		background: linear-gradient(
				0deg,
				var(--c-shadow-flipper-low),
				rgba(0, 0, 0, 0),
				rgba(0, 0, 0, 0)
			),
			var(--c-background-nav);
	}

	.bottom-front,
	.bottom-back {
		border-radius: 0 0 7px 7px;
		display: flex;
		align-items: end;
		background: linear-gradient(
				0deg,
				var(--c-shadow-flipper-high),
				rgba(0, 0, 0, 0),
				var(--c-shadow-flipper-low)
			),
			var(--c-background-nav);
	}

	.top-front {
		position: absolute;
		width: 100%;
		top: 0;
		animation: flip-top 0.25s ease-in;
		transform-origin: bottom;
		transform: perspective(200px) rotateX(0);
	}

	.bottom-front {
		position: relative;
	}

	.bottom-back {
		position: absolute;
		width: 100%;
		bottom: 0;
		animation: flip-bottom 0.25s ease-out 0.25s;
		transform-origin: top;
		transform: perspective(200px) rotateX(90deg);
	}

	span {
		display: inline-block;
		color: var(--c-text-nav);
		min-width: 2.625rem;
		font-size: 3.75em;
		line-height: 1em;
	}

	p {
		color: var(--c-text-main);
		/* font-size: var(--fs-large); */
		/* font-weight: var(--fw-semi-bold); */
		font-size: 0.75rem;
		letter-spacing: 4.5px;
	}

	@keyframes flip-top {
		100% {
			transform: rotateX(-90deg);
		}
	}

	@keyframes flip-bottom {
		100% {
			transform: rotateX(0deg);
		}
	}

	@media (min-width: 767px) {
		.container {
			row-gap: 2rem;
		}
		.top-back,
		.top-front,
		.bottom-front,
		.bottom-back {
			padding: 2.5rem 1.75rem;
			height: 0.875rem;
			line-height: 1;
		}
		span {
			min-width: 3.5rem;
			font-size: 5em;
			height: 1em;
		}
		p {
			font-size: 1rem;
			letter-spacing: 6px;
		}
	}
</style>
