<script lang="ts">
	import { enhance } from '$app/forms';
	import FlyDownTransition from '$lib/FlyDownTransition.svelte';

	let action = 'login';
	let username: string;
	let password: string;

	function switchAction() {
		action = action === 'login' ? 'register' : 'login';
	}
</script>

{#if action === 'login'}
	<FlyDownTransition>
		<h1>Login</h1>
		<button class="outline" on:click={switchAction}>Switch to Register</button>

		<form method="POST" action="?/login" use:enhance>
			<label for="username">Username</label>
			<input type="text" id="username" name="username" bind:value={username} required />

			<label for="password">Password</label>
			<input type="password" id="password" name="password" bind:value={password} required />

			<button type="submit">Login</button>
		</form>
	</FlyDownTransition>
{:else}
	<FlyDownTransition>
		<h1>Register</h1>
		<button class="outline" on:click={switchAction}>Switch to Login</button>

		<form method="POST" action="?/register" use:enhance>
			<label for="username">Username</label>
			<input type="text" id="username" name="username" bind:value={username} required />

			<label for="password">Password</label>
			<input type="password" id="password" name="password" bind:value={password} required />

			<label for="name">Name</label>
			<input type="text" id="name" name="name" required />

			<button type="submit">Register</button>
		</form>
	</FlyDownTransition>
{/if}

<style lang="postcss">
	form {
		margin: 0 auto;
		max-width: 30rem;
	}

	.outline {
		margin: 0 auto;
		border: none;
		width: auto;
		margin-bottom: 1rem;
	}

	h1 {
		margin-bottom: 1rem;
	}
</style>
