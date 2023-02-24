<script lang="ts">
	import { enhance } from '$app/forms';
	import FlyTransition from '$lib/FlyTransition.svelte';
	import { username } from '$lib/userStore';

	let password: string;
	const time = 150;
	const direction = 200;
</script>

<FlyTransition
	start={{
		delay: time,
		duration: time,
		y: direction
	}}
	stop={{
		duration: time,
		y: direction
	}}
>
	<h1>Login</h1>
	<div>
		<a href="/register">Switch to Register</a>
	</div>

	<form method="POST" action="?/login" use:enhance>
		<label for="username">Username</label>
		<input type="text" id="username" name="username" bind:value={$username} required />

		<label for="password">Password</label>
		<input type="password" id="password" name="password" bind:value={password} required />

		<button type="submit">Login</button>
	</form>
</FlyTransition>

<style lang="scss">
	form {
		margin: 0 auto;
		max-width: 30rem;
	}

	div {
		display: flex;
		justify-content: center;
		margin: 1.5rem;
	}

	h1 {
		margin-bottom: 1rem;
	}
</style>
