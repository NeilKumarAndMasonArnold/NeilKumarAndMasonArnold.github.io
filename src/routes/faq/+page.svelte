<script>
	import Question from './Question.svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	const questionsArray = [
		{
			question: 'Why might I see a swastika at/on [location]?',
			answer: `
				As a Hindu and a Jew with elements of Christian syncretism, we are intimately familiar with the cultural complexities that can arise when the same symbol carries different meanings across cultures. The symbol you might encounter at certain ceremonies or on some decor is the "swastik" from Hindu tradition. It signifies auspiciousness, prosperity, and good fortune and has been a cherished symbol in Hindu rituals and art for thousands of years. We are deeply aware that for many, especially from a Jewish background, the swastika not only evokes painful memories due to its appropriation by the Nazis during World War II but also resonates with the disturbing misappropriation by white supremacists and neo-Nazis in more recent times. In respect for our diverse guest list, we've endeavored to minimize its display during our celebrations. For a detailed history of the symbol, please <a href="/about/history-of-the-swastik/swastika">click here</a>.
			`
		},
		{
			question: 'Why is do I see a swastik covered / hidden?',
			answer: `
				We recognize the deep sensitivity surrounding the swastika symbol, especially given its association with the Holocaust. Out of respect for family members and guests, we've minimized the usage of the swastik symbol during our ceremonies and decor. However, you might still encounter it in a few traditional Hindu contexts. We appreciate everyone's understanding and compassion as we merge two beautiful cultures. For a detailed history of the symbol, please <a href="/about/history-of-the-swastik/swastika">click here</a>.
			`
		},
		{
			question: 'Will any of the ceremonies have a dress code?',
			answer: 'Information on this will be coming soon!'
		},
		{
			question: 'Will there be drinks?',
			answer: 'Information on this will be coming soon!'
		}
	];
</script>

<svelte:head>
	<title>FAQ</title>
</svelte:head>

<div class="wrapper">
	<h1 in:fly={{ y: 10, easing: quintOut, duration: 750 }}>FAQ – Frequently Asked Questions</h1>

	<div class="question-container">
		{#each questionsArray as {question, answer}, index}
			<Question questionNum={index + 1}>
				<h4 slot=question><span>Q: </span>{question}</h4>
				<p slot=answer><span>A: </span>{@html answer}</p>
			</Question>
		{/each}
	</div>
</div>

<style>
	.wrapper {
		height: max-content;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	h1 {
		color: var(--c-text-main);
	}

	.question-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	h4,
	p {
		text-align: left;
		font-weight: var(--fw-normal);
		color: var(--c-text-main);
	}

	a {
		color: var(--c-text-main);
	}

	a:hover {
		color: var(--c-text-link);
	}

	span {
		font-size: var(--fs-semi-large);
		font-weight: var(--fw-bold);
		color: var(--c-text-main);
	}
</style>
