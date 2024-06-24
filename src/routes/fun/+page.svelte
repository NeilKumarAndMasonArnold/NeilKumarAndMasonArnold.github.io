<script>
	import { onMount } from 'svelte';

	import TimeCard from './TimeCard.svelte';

	const releaseDate = new Date('2025-08-17T00:00:00');

	let time = {
		days: 9,
		hours: 0,
		minutes: 0,
		seconds: 0
	};

	function updateCountdown() {
		const now = new Date();
		// const timeDifference = releaseDate.getTime() - now.getTime();
		const gap = releaseDate.getTime() - now.getTime();

		const getDays = Math.floor((gap / (1000 * 60 * 60 * 24)));
		const getHours = Math.floor((gap / (1000 * 60 * 60)) % 24);
		const getMinutes = Math.floor((gap / 1000 / 60) % 60);
		const getSeconds = Math.floor((gap / 1000) % 60);

		// time.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
		// time.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		// time.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
		// time.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

		time.days = getDays;
		time.hours = getHours;
		time.minutes = getMinutes;
		time.seconds = getSeconds;
	}

	onMount(() => {
		updateCountdown();
	});
</script>

<div>
	<TimeCard callback={updateCountdown} name="Days" number={time.days} />
	<TimeCard callback={updateCountdown} name="Hours" number={time.hours} />
	<TimeCard callback={updateCountdown} name="Minutes" number={time.minutes} />
	<TimeCard callback={updateCountdown} name="Seconds" number={time.seconds} />
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
	}

	@media (min-width: 767px) {
		div {
			gap: 5rem 2rem;
			flex-wrap: wrap;
		}
	}
</style>
