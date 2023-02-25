<script lang="ts">
	import { enhance } from '$app/forms';
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import type { PageData } from './$types';

	export let data: PageData;
	let selected: string;
	let options = ['Articles', 'Users'];

	$: ({ articles } = data);
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
		<form action="?/createArticle" method="POST" use:enhance transition:fade={{ duration: 150 }}>
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

					<form action="?/deleteArticle&id={article.id}" method="POST" use:enhance>
						<button type="submit" class="outline secondary">Delete Article</button>
					</form>
					<a href="/admin/{article.id}" role="button" class="outline constrast" style="width: 100%;"
						>Edit Article</a
					>
				</article>
			{/each}
		</div>
	</div>
{/if}
