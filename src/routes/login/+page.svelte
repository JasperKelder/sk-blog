<script>
	import { enhance } from '$app/forms';
</script>

<h1>Login</h1>

<form method="POST" use:enhance>
	<label for="username">Username</label>
	<input type="text" id="username" name="username" required />

	<label for="password">Password</label>
	<input type="password" id="password" name="password" required />

	<button type="submit">Login</button>
</form>
