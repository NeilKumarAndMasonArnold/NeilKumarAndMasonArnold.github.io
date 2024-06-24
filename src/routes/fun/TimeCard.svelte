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

	const topFlipStart = () => {
		topFront = numStringArray;
	};

	const topFlipEnd = () => {
		topBack = numStringArray;
	};

	const bottomFlipStart = () => {
		bottomFront = numStringArray;
	};

	const bottomFlipEnd = () => {
		bottomBack = numStringArray;
	};

	onMount(() => {
		topFront = numStringArray;
		topBack = numStringArray;
		bottomFront = numStringArray;
		bottomBack = numStringArray;
	});

	onInterval(callback, 1000);
</script>

<div class="container">
	{#key number}
		<div class="wrapper">
			<div class="top-front">
				{#each topFront as num}
					<span>{num}</span>
				{/each}
			</div>
			<div class="top-back" on:animationstart={topFlipStart} on:animationend={topFlipEnd}>
				{#each topBack as num}
					<span>{num}</span>
				{/each}
			</div>
			<div class="bottom-front">
				{#each bottomFront as num}
					<span>{num}</span>
				{/each}
			</div>
			<div class="bottom-back" on:animationstart={bottomFlipStart} on:animationend={bottomFlipEnd}>
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

	p {
		color: var(--c-text-main);
		/* font-size: var(--fs-large); */
		/* font-weight: var(--fw-semi-bold); */
		font-size: 0.5rem;
		letter-spacing: 3px;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		border-radius: 7px;
		position: relative;
		box-shadow: 0 10px 5px rgba(0, 0, 0, 0.125);
	}
	
	.top-front,
	.top-back,
	.bottom-front,
	.bottom-back {
		display: flex;
		justify-content: center;
		overflow: hidden;
		padding: 1.25em 1em;
		height: 0.5em;
		line-height: 1.5;
	}
	
	.top-front,
	.top-back {
		background: var(--c-background-nav);
		border-bottom: 1px solid black;
		filter: brightness(85%);
		border-radius: 7px 7px 0 0;
	}

	.top-back {
		position: absolute;
		width: 100%;
		top: 0;	
		animation: flip-top 0.25s ease-in;
		transform-origin: bottom;
		transform: perspective(200px) rotateX(0);
	}

	@keyframes flip-top {
		100% {
			transform: rotateX(-90deg);
		}
	}

	.bottom-front {
		position: relative;
	}

	.bottom-front,
	.bottom-back {
		display: flex;
		align-items: end;
		background: var(--c-background-nav);
		border-radius: 0 0 7px 7px;
	}

	.bottom-back {
		position: absolute;
		width: 100%;
		bottom: 0;
		animation: flip-bottom 0.25s ease-out 0.25s;
		transform-origin: top;
		transform: perspective(300px) rotateX(90deg);
	}
	
	span {
		display: inline-block;
		color: red;
		min-width: 1.75rem;
		font-size: 2.5rem;
		line-height: 1;
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
		.top-front, .top-back, .bottom-front, .bottom-back {
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
