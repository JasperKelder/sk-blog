<script lang="ts">
	import '@picocss/pico';
	import '../styles.css';
	import PageTransition from '$lib/PageTransition.svelte';
	import { navigating } from '$app/stores';
	import Navigation from '$lib/Navigation.svelte';

	$: navigate = ($navigating?.from !== $navigating?.to).toString();
</script>

<svelte:head>
	<title>SvelteKit Blog</title>
</svelte:head>

<Navigation />

<PageTransition trigger={navigate}>
	<div class="container">
		<slot />
	</div>
</PageTransition>

<style lang="postcss">
	div {
		margin-top: 3rem;
	}
</style>
