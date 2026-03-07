<script lang="ts">
	const { data } = $props();
</script>

{#each data.posts as post (post.id)}
	<article>
		<div class="post-details">
			<h2>{post.title}</h2>
			<p>{post.subtitle}</p>
			<a href="/blog/{post.slug}">Read More</a>
		</div>
		{#if post.coverImage}
			<img src={post.coverImage.url} alt="" />
		{/if}
	</article>
{/each}

{#if data.previousPage}
	<a href={data.previousPage}>Previous Page</a>
{/if}

{#if data.nextPage}
	<a href={data.nextPage}>Next Page</a>
{/if}

<style>
	article {
		display: flex;
		gap: 10px;
		align-items: center;
		max-width: 800px;
		margin: 0 auto;
	}

	img {
		width: 150px;
		height: 150px;
		object-fit: cover;
		/* border-top-right-radius: 10px;
		border-bottom-right-radius: 10px; */
		flex: 0 0 auto;
	}

	.post-details {
		padding: 20px;
		flex: 1;
	}

	p {
		color: rgb(37, 37, 37);
	}
</style>
