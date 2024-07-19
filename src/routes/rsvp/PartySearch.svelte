<script>
	export let stage = 3;
	export let party = 'testing';
	export let guestsInfo;

	import Loader from '$lib/components/Loader.svelte';
	import { onMount } from 'svelte';

	const SCRIPT_URL =
		'https://script.google.com/macros/s/AKfycbxhdXeWCIxyxuKZ7J0AUFP9thTCIJpFDUFn4sIbjAqx7PYkkcmX2x1t2_WIXBkdN5Zb/exec';

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
