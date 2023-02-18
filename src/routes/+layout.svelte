<script lang="ts">
	import '@picocss/pico';
	import '../styles.css';
	import PageTransition from '$lib/PageTransition.svelte';
	import { navigating } from '$app/stores';
	import Navigation from '$lib/Navigation.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: navigate = ($navigating?.from !== $navigating?.to).toString();
</script>

<svelte:head>
	<title>SvelteKit Blog</title>
</svelte:head>

<Navigation {data} />

<PageTransition trigger={navigate}>
	<slot />
</PageTransition>
