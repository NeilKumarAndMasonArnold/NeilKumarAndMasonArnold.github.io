<script>
	export let SCRIPT_URL = '';
	export let rsvpData = {};
	export let submitStatus = '';
	export let stage = 5;

	import Loader from "$lib/components/Loader.svelte";
	import { onMount } from "svelte";

	onMount(() => {
		handleSubmit();
	})

	function handleSubmit() {
		console.log(rsvpData);

		const params = new URLSearchParams({
			action: 'updateRSVP',
			rsvpData: JSON.stringify(rsvpData)
		});

		fetch(`${SCRIPT_URL}?${params.toString()}`, {
			method: 'GET',
			mode: 'cors'
		})
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
				// Try to parse the response as JSON
				if (typeof data === 'string') {
					submitStatus = data;
					console.log('Got a string back, probably some kind of error');
					stage = 6;
				} else {
					try {
						if (data.status === 'RSVP updated successfully') {
							submitStatus = 'RSVP submitted successfully!';
							stage = 6;
						} else {
							submitStatus = 'Error submitting RSVP. Please try again.';
							stage = 6;
						}
					} catch (error) {
						// If parsing fails, assume it's an error message
						submitStatus = `Error: ${data}`;
						stage = 6;
					}
				}
			})
			.catch((error) => {
				console.error('Error:', error);
				submitStatus = 'Error submitting RSVP. Please try again.';
				stage = 6;
			});
	}
</script>

<Loader />