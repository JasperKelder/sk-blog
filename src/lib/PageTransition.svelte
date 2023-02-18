<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	onMount(() => (motion = !window.matchMedia(`(prefers-reduced-motion: reduce)`).matches));

	export let trigger = '';
	let motion = true;
	let time = 150;
</script>

<div class="transition-container">
	{#key trigger}
		{#if motion}
			<div in:fade={{ delay: time, duration: time }} out:fade={{ duration: time }}>
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
