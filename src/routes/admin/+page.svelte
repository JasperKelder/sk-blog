<script lang="ts">
	import { enhance } from '$app/forms';
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import type { PageData, Snapshot } from './$types';

	export let data: PageData;
	let selected: string;
	let options = ['Articles', 'Users'];
	let username: string;
	let password: string;

	$: ({ articles, users } = data);

	export const snapshot: Snapshot = {
		capture: () => selected,
		restore: (value) => (selected = value)
	};
</script>

<select bind:value={selected}>
	{#each options as option}
		<option value={option}>
			{option}
		</option>
	{/each}</select
>

{#if selected === 'Articles'}
	<div class="grid">
		<form
			action="/api/article?/create"
			method="POST"
			use:enhance
			transition:fade={{ duration: 150 }}
		>
			<h3>New Article</h3>

			<label for="title">Title</label>
			<input type="text" id="title" name="title" />

			<label for="title">Content</label>
			<textarea id="content" name="content" rows={5} />

			<button type="submit">Add Article</button>
		</form>

		<div>
			{#each articles as article (article.id)}
				<article transition:fade={{ duration: 150 }} animate:flip={{ duration: 600 }}>
					<header>{article.title}</header>
					<p>
						{article.content}
					</p>

					<form action="/api/article?/delete&id={article.id}" method="POST" use:enhance>
						<button type="submit" class="outline secondary">Delete Article</button>
					</form>
					<a href="/admin/{article.id}" role="button" class="outline constrast" style="width: 100%;"
						>Edit Article</a
					>
				</article>
			{/each}
		</div>
	</div>
{:else if selected === 'Users'}
	<div class="grid">
		<form method="POST" action="?/register" use:enhance>
			<h3>New User</h3>
			<label for="username">Username</label>
			<input type="text" id="username" name="username" bind:value={username} required />

			<label for="password">Password</label>
			<input type="password" id="password" name="password" bind:value={password} required />

			<button type="submit">Add user</button>
		</form>
		<ul>
			{#each users as user (user.id)}
				<li>
					<p>{user.username}</p>
				</li>
			{/each}
		</ul>
	</div>
{/if}
