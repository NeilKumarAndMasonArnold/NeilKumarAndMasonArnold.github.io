<script>
	export let stage = 1;
	export let name;
	export let parties = [''];
	export let errSuggestion = '';
	export let error = '';
	export let guestsInfo;
	export let SCRIPT_URL = '';

	import Loader from '$lib/components/Loader.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		error = '';
		errSuggestion = '';
		fetch(`${SCRIPT_URL}?action=searchGuests&name=${encodeURIComponent(name)}`)
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
				if (data.status) {
					// Exact match found, skip party selection step
					guestsInfo = [...data.guests];
					stage = 4;
				} else if (data.parties) {
					// Partial or multiple match(es) found, go to party selection step
					parties = data.parties;
					stage = 2;
				} else if (typeof data === 'string') {
					error = data;
					if (data === 'Guest not found') {
						errSuggestion =
							"Oops! We're having trouble finding your invite.  Please try another spelling of your name or contact the couple";
					} else {
						errSuggestion =
							"Woah!  Not sure how we got here, but something went wrong and it's not clear what.  Please take a screenshot and send it to the couple";
					}
					stage = 0;
				}
			});
	});
</script>

<Loader />
