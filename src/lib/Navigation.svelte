<script lang="ts">
	import type { PageData } from '../routes/$types';

	export let data: PageData;
</script>

<nav>
	<ul>
		<li>
			<a href="/">Blog</a>
		</li>
		{#if !data.user}
			<li>
				<a href="/login">Login</a>
			</li>
		{:else}
			<li>
				<a href="/admin">Admin</a>
			</li>
			<li>
				<form method="POST">
					<button formaction="/logout" type="submit">Logout</button>
				</form>
			</li>
		{/if}
	</ul>
</nav>

<style lang="postcss">
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
</style>
