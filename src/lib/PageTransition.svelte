<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let trigger = '';
	let noMotion = false;

	onMount(() => (noMotion = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches));
</script>

<div class="transition-container">
	{#key trigger}
		{#if !noMotion}
			<div in:fade={{ delay: 100, duration: 100 }} out:fade={{ duration: 100 }}>
				<slot />
			</div>
		{:else}
			<slot />
		{/if}
	{/key}
</div>

<style>
	.transition-container {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
	}

	.transition-container > * {
		grid-row: 1;
		grid-column: 1;
	}
</style>
