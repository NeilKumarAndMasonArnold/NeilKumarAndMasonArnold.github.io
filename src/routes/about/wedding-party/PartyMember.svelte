<!--
Party Member Info Component (PartyMember.svelte)
Renders an expandable card with information on a wedding party member.

Author: Neil A. Kumar (2024)
Status: Ongoing
-->

<script>
	export let colIndex;
	export let columnsCount;
	export let index;
	export let memberInfo;

	import { fly, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { iconLibrary } from '$lib';
	
	import Icon from '$lib/components/Icon.svelte';

	let showDetails = false;

	const getDelay = (index, column) => {
		return column * 100 + index * columnsCount * 100;
	}
</script>

<div
	in:fly|global={{ y: 50, duration: 1000, delay: getDelay(index, colIndex), easing: quintOut }}
	role="button"
	tabindex="0"
	aria-label="Toggle Party Member Details"
	aria-expanded={showDetails}
	class="party-member-card {memberInfo.party}"
	on:click={() => (showDetails = !showDetails)}
	on:keypress={() => (showDetails = !showDetails)}
>
	<div class="banner" />
	<div class="content">
		<div class="image-container" class:honor={memberInfo.honor}>
			<img src={memberInfo.image.src} alt={memberInfo.image.alt} />
		</div>
		<div class="member-info">
			<h1>{memberInfo.name}</h1>

			{#if memberInfo.honor}
				<h2><i>{memberInfo.honor}</i></h2>
			{:else}
				<h2><i>{memberInfo.party} Party</i></h2>
			{/if}

			{#if showDetails}
				<p transition:slide={{ easing: quintOut, duration: 500 }}>
					{memberInfo.description.first_paragraph}
				</p>
				<p transition:slide={{ easing: quintOut, duration: 500 }}>
					{memberInfo.description.second_paragraph}
				</p>
			{/if}

			<div id="arrow" style:transform={showDetails ? 'rotate(0deg)' : 'rotate(-180deg)'}>
				<Icon
					path={iconLibrary['dropdown'].path}
					fill="none"
					stroke="var(--c-text-main)"
					stroke-width="3px"
					stroke-linecap="round"
					stroke-linejoin="round"
					viewBox={iconLibrary['dropdown'].viewBox}
				/>
			</div>
		</div>
	</div>
</div>

<style>

	.party-member-card {
		border-radius: 20px;
		margin-bottom: 2rem;
		background: var(--c-background-nav);
		box-shadow: 0 5px 30px var(--c-shadow-gallery);

		--banner-height: 26%;
	}

	.party-member-card:hover {
		cursor: pointer;
	}

	.banner {
		border-radius: 20px 20px 0 0;
		height: var(--banner-height);
	}

	.content {
		position: relative;
		top: calc(-1 * var(--banner-height));
		padding: 2rem;
	}

	.image-container {
		width: 80%;
		border-radius: 50%;
		margin: 0 auto 10px;
		aspect-ratio: 1/1;
		background: var(--c-background-nav);
	}

	.image-container.honor {
		background: var(--c-glow-honor);
		box-shadow: 0 0 30px 5px var(--c-glow-honor-aura);
	}

	img {
		height: 100%;
		width: 100%;
		border-radius: 50%;
		object-fit: cover;
		padding: 4px;
		display: block;
	}

	.member-info {
		display: flex;
		flex-direction: column;
	}

	p {
		margin-top: 1rem;
		color: var(--c-text-main);
		text-indent: 2rem;
	}

	h1 {
		margin: 0 0 5px;
		font-size: var(--fs-large);
		font-weight: var(--fw-bold);
		color: var(--c-text-main);
	}

	h2 {
		margin: 0;
		font-weight: var(--fw-normal);
		color: grey; /* Custom css property???? */
	}

	#arrow {
		margin-top: 1rem;
	}

	@media (min-width: 767px) {
		p {
			text-align: left;
		}
	}
</style>