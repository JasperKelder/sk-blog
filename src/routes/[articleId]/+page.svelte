<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ article } = data);
</script>

<article>
	<header>{article.title}</header>
	<p>
		{article.content}
	</p>

	<a href="/">Back</a>
</article>

<style lang="scss">
	article {
		> a {
			display: flex;
			justify-content: center;
		}
	}
</style>
