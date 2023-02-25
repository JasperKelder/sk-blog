<script lang="ts">
	import type { PageData } from '../../routes/$types';
	import Link from './Link.svelte';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import FlyTransition from '$lib/FlyTransition.svelte';

	export let data: PageData;

	const time = 150;
	const direction = -200;
	const start = {
		delay: time,
		duration: time,
		x: direction
	};
	const stop = {
		duration: time,
		x: direction
	};
	const links = ['', 'admin', 'login', 'logout'];
</script>

<nav>
	<ul>
		<FlyTransition trigger={data.user?.username} {start} {stop}>
			{#each links as link (link)}
				{#if link !== 'logout'}
					<Link to={link} {data} page={$page} />
				{:else if data.user}
					<li>
						<form method="POST" action="?/logout" use:enhance>
							<button type="submit">Logout</button>
						</form>
					</li>
				{/if}
			{/each}
		</FlyTransition>
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
		margin: 0.3rem;
		margin-left: 1rem;
	}

	button {
		padding: none;
	}
</style>
