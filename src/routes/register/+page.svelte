<script>
	import { enhance } from '$app/forms';
</script>

<h1>Register</h1>

<form method="POST" use:enhance>
	<label for="name">Name</label>
	<input type="text" id="name" name="name" required />

	<label for="username">Username</label>
	<input type="text" id="username" name="username" required />

	<label for="password">Password</label>
	<input type="password" id="password" name="password" required />

	<button type="submit">Register</button>
</form>
