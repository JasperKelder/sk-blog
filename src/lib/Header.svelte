<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from '../routes/$types';
	import { page } from '$app/stores';

	export let data: PageData;
</script>

<nav>
	<ul>
		<li>
			<a href="/" class:active={$page.url.pathname === '/'}>Blog</a>
		</li>
		{#if !data.user}
			<li>
				<a href="/login" class:active={$page.url.pathname === '/login'}>Login</a>
			</li>
		{:else}
			<li>
				<a href="/admin" class:active={$page.url.pathname === '/admin'}>Admin</a>
			</li>
			<li>
				<form method="POST" action="?/logout" use:enhance>
					<button type="submit">Logout</button>
				</form>
			</li>
		{/if}
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

	a {
		padding: 0.5rem;
		margin: 0.5rem;
		border-radius: 1rem;
		font-size: 1.2rem;
	}

	form {
		margin: 0.5rem;
	}

	.active {
		text-decoration: underline;
	}
</style>
