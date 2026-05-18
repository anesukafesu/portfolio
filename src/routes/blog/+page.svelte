<script lang="ts">
	import { formatDate } from '../../[slug]/formatDate.js';

	const { data } = $props();
</script>

<ol start={data.totalDocuments} reversed>
	{#each data.posts as post (post.slug)}
		<li><a href="/blog/{post.slug}">{post.title} ({formatDate(post.publishedAt)})</a></li>
	{/each}
</ol>

{#if data.previousPage}
	<a href={data.previousPage}>Previous Page</a>
{/if}

{#if data.nextPage}
	<a href={data.nextPage}>Next Page</a>
{/if}

<style>
	li {
		margin: 1rem 0;
	}

	a {
		text-decoration: none;
	}
</style>
