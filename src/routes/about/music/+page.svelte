<script>
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
</script>

<div class="wrapper" in:fly={{ y: 10, easing: quintOut, duration: 750 }}>
	<h1>Music</h1>
	<p>Coming Soon!</p>
</div>
