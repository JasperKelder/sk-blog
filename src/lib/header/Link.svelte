<script lang="ts">
	import type { Page } from '@sveltejs/kit';
	import type { PageData } from '../../routes/$types';

	export let to: string;
	export let page: Page;
	export let data: PageData;

	const name = to === '' ? 'Blog' : to;
</script>

{#if to === '' || (!data.user && to === 'login') || (data.user?.role === 'ADMIN' && to === 'admin')}
	<li>
		<a href={'/' + to} class:active={page.url.pathname === '/' + to}>{name}</a>
	</li>
{/if}

<style lang="scss">
	a {
		padding: 0.5rem;
		margin: 0.5rem;
		border-radius: 1rem;
		font-size: 1.2rem;
		text-transform: capitalize;
	}

	.active {
		text-decoration: underline;
		text-decoration-skip-ink: none;
	}
</style>
