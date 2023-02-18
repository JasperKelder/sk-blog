<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	onMount(() => (motion = !window.matchMedia(`(prefers-reduced-motion: reduce)`).matches));

	let motion = true;
	let time = 150;
</script>

<div class="container">
	{#if motion}
		<div
			in:fly={{
				delay: time,
				duration: time,
				y: 200
			}}
			out:fly={{
				duration: time,
				y: 200
			}}
		>
			<slot />
		</div>
	{:else}
		<slot />
	{/if}
</div>

<style lang="postcss">
	.container {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
	}
	.container > * {
		grid-row: 1;
		grid-column: 1;
	}
</style>
