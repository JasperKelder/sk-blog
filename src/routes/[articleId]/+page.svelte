<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	let comment: String;
	export let data: PageData;
	$: ({ article } = data);
</script>

<a href="/">
	<article>
		<header>{article.title}</header>
		<p>
			{article.content}
		</p>
	</article>
</a>

<form method="POST" action="?/comment" use:enhance>
	<input type="text" id="comment" name="comment" bind:value={comment} required />

	<button type="submit">Comment</button>
</form>

<style lang="scss">
	a {
		text-decoration: none;
	}
</style>
