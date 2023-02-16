<nav>
	<a href="/">Blog</a>
	<a href="/register">Register</a>
	<a href="/login">Login</a>
	<a href="/admin">Admin</a>
</nav>

<style lang="postcss">
	nav {
		background-color: var(--background-color);
		display: flex;
		justify-content: center;
		border-bottom: 0.2rem solid var(--primary);
	}

	a {
		color: var(--color);
		text-decoration: none;
		padding: 1rem;
		transition: color 0.4s, transform 0.4s;
		font-size: 2rem;

		&:hover {
			color: var(--primary);
		}

		&:active {
			transform: translateY(0.1rem);
			color: var(--primary-focus);
		}
	}
</style>
