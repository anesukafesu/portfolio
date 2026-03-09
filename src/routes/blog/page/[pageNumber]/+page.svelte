<script lang="ts">
	const { data } = $props();
</script>

<ol start={data.totalDocuments} reversed>
	{#each data.posts as post (post.slug)}
		<li><a href="/blog/{post.slug}">{post.title}</a></li>
	{/each}
</ol>

{#if data.previousPage}
	<a href={data.previousPage}>Previous Page</a>
{/if}

{#if data.nextPage}
	<a href={data.nextPage}>Next Page</a>
{/if}
