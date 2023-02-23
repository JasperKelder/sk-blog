<script lang="ts">
	import '@picocss/pico';
	import '../styles.scss';
	import PageTransition from '$lib/PageTransition.svelte';
	import { navigating } from '$app/stores';
	import Header from '$lib/Header.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: navigate = ($navigating?.from !== $navigating?.to).toString();
</script>

<svelte:head>
	<title>SvelteKit Blog</title>
</svelte:head>

<Header {data} />

<PageTransition trigger={navigate}>
	<main>
		<slot />
	</main>
</PageTransition>
