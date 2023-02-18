<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	onMount(() => (motion = !window.matchMedia(`(prefers-reduced-motion: reduce)`).matches));

	let motion = true;
	let time = 150;

	export let trigger = '';
</script>

<div class="container">
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

<style lang="postcss">
	.container {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;

		& > * {
			grid-row: 1;
			grid-column: 1;
		}
	}
</style>
