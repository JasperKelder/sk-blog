<script lang="ts">
	import '../styles.css';
	import PageTransition from '$lib/PageTransition.svelte';
	import { navigating } from '$app/stores';
	import Navigation from '$lib/Navigation.svelte';

	$: navigate = ($navigating?.from !== $navigating?.to).toString();
</script>

<Navigation />

<PageTransition trigger={navigate}>
	<slot />
</PageTransition>
