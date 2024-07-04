<!--
aoesunthaoeusnthaoeu
snthaoeusnthaoeusnthaoeu
snthaoeusnthaoeusnthaoeu
sntahoeusnthaoeusnthaoeu
-->

<script>
	//@ts-nocheck

	export let value,
		label,
		type = 'text';

	function typeAction(node) {
		node.type = type;
	}
</script>

<p class="form-control">
	{#if label}
		<label for>{label}</label>
	{/if}
	<input use:typeAction bind:value />
</p>
