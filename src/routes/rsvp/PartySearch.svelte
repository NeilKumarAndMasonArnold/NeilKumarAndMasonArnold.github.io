<script>
	export let stage = 3;
	export let party = 'testing';
	export let guestsInfo;
	export let SCRIPT_URL = '';

	import Loader from '$lib/components/Loader.svelte';
	import { onMount } from 'svelte';

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
