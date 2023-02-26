<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ article } = data);
</script>

<form action="/api/article/{$page.params.articleId}?/update" method="POST" use:enhance>
	<h3>Edit Article</h3>
	<label for="title">Title</label>
	<input type="text" id="title" name="title" value={article.title} />
	<label for="title">Content</label>
	<textarea id="content" name="content" rows={5} value={article.content} />
	<button type="submit">Update Article</button>
</form>
