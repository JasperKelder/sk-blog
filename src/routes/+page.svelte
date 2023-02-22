<script lang="ts">
	import { enhance } from '$app/forms';
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ articles } = data);
</script>

<div class="grid">
	<div>
		<h1>Blog</h1>

		{#each articles as article (article.id)}
			<a
				href="/{article.id}"
				in:fade={{ duration: 400 }}
				out:fade={{ duration: 300 }}
				animate:flip={{ duration: 600 }}
			>
				<article>
					<header>{article.title}</header>
					<p>
						{article.content}
					</p>
				</article></a
			>
		{/each}
	</div>
</div>
