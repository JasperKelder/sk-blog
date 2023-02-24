<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import type { PageData } from '../../routes/$types';
	import Link from './Link.svelte';

	export let data: PageData;

	const links = ['', 'admin', 'login', 'logout'];
</script>

<nav>
	<ul>
		{#each links as link (link)}
			{#if link !== 'logout'}
				<Link to={link} {data} page={$page} />
			{:else}
				<li>
					<form method="POST" action="?/logout" use:enhance>
						<button type="submit">Logout</button>
					</form>
				</li>
			{/if}
		{/each}
	</ul>
</nav>

<style lang="scss">
	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 0.2rem solid var(--primary);
		margin-bottom: 2rem;
	}

	form {
		margin: 0.5rem;
	}
</style>
