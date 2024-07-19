<script>
	export let stage = 3;
	export let party = 'testing';
	export let guestsInfo;

	import Loader from '$lib/components/Loader.svelte';
	import { onMount } from 'svelte';

	const SCRIPT_URL =
		'https://script.google.com/macros/s/AKfycbzuA0bqxydHXGhJoZs_nqAMixSMTuF0CGEfpNkWLWN-tWwwmiDrXlU1K2Kgp4XDLWCP/exec';

	onMount(() => {
		fetch(`${SCRIPT_URL}?action=getPartyRSVPData&partyId=${encodeURIComponent(party.party)}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const contentType = response.headers.get('content-type');
				if (contentType && contentType.includes('json')) {
					return response.json();
				} else if (contentType && contentType.includes('text')) {
					return response.text();
				} else {
					console.log('Something went wrong?');
				}
			})
			.then((data) => {
				guestsInfo = [...data.guests];
				stage = 4;
			});
	});
</script>

<Loader />
