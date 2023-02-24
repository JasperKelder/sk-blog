<script lang="ts">
	import '@picocss/pico';
	import '../styles.scss';
	import FadeTransition from '$lib/FadeTransition.svelte';
	import { navigating } from '$app/stores';
	import Header from '$lib/header/Header.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: navigate = ($navigating?.from !== $navigating?.to).toString();
</script>

<svelte:head>
	<title>SvelteKit Blog</title>
</svelte:head>

<Header {data} />

<FadeTransition trigger={navigate} start={{ delay: 150, duration: 150 }} stop={{ duration: 150 }}>
	<main>
		<slot />
	</main>
</FadeTransition>
