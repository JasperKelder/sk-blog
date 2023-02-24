<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	onMount(() => (motion = !window.matchMedia(`(prefers-reduced-motion: reduce)`).matches));

	let motion = true;

	export let trigger: any = null;
	export let start: {};
	export let stop: {};
</script>

<div class="container">
	{#if motion}
		{#key trigger}
			<div in:fade={start} out:fade={stop}>
				<slot />
			</div>
		{/key}
	{:else}
		<slot />
	{/if}
</div>

<style lang="scss">
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
