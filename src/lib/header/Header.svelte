<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import FlyTransition from '$lib/FlyTransition.svelte';
	import type { PageData } from '../../routes/$types';
	import Link from './Link.svelte';

	export let data: PageData;

	const links = ['', 'admin', 'login', 'logout'];
	const time = 150;
	const direction = -200;
</script>

<nav>
	<ul>
		<FlyTransition
			trigger={data.user}
			start={{
				delay: time,
				duration: time,
				x: direction
			}}
			stop={{
				duration: time,
				x: direction
			}}
		>
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
