<!--
Icon Component (Icon.svelte)
Renders an svg icon from the icon library.render

Author: Neil A. Kumar (2024)
Status: Complete
-->

<script>
	export let viewBox = '';
	export let height = '24px';
	export let width = '24px';
	export let path = '';
	export let fill = 'var(--c-text-main)';
</script>

<svg xmlns="http://www.w3.org/2000/svg" {viewBox} {width} {height} {...$$restProps}>
	{#if fill === 'gradient'}
		<defs>
			<linearGradient id="theGradient" x1="0%" y1="0%" x2="100%" y2="0%">
				<stop offset="0%" style="stop-color: var(--c-gradient-1);" />
				<stop offset="50%" style="stop-color: var(--c-gradient-2);" />
				<stop offset="100%" style="stop-color: var(--c-gradient-3);" />
			</linearGradient>
		</defs>
		<path fill="url(#theGradient)" d={path} />
	{:else}
		<path {fill} d={path} />
	{/if}
</svg>
