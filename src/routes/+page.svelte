<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="grid">
	<div>
		<h1>Blog</h1>

		{#each data.articles as article (article.id)}
			<a href="/{article.id}">
				<article>
					<header>{article.title}</header>
					<p>
						{article.content}
					</p>
				</article>
			</a>
		{/each}
	</div>
</div>

<style lang="scss">
	a {
		text-decoration: none;
	}
</style>
