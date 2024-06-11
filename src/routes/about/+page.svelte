<script>
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

<div class="wrapper" in:fly={{ y: 10, easing: quintOut, duration: 750 }}>
	<h1>About Us</h1>
	<p>This is the story of Mason Arnold and Neil Kumar</p>
	<p>Coming Soon!</p>
</div>
