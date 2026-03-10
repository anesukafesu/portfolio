<script lang="ts">
	import { formatDate } from './formatDate';
	const { data } = $props();
	const post = $derived(data.post);
</script>

<h1>{post.title}</h1>
<p class="details">
	Published on {formatDate(post.publishedAt)} | {post.readTimeInMinutes}
	{post.readTimeInMinutes === 1 ? 'min' : 'mins'} to read
</p>
<p class="subtitle">{post.subtitle}</p>

{#if post.coverImage}
	<img src={post.coverImage.url} alt="" />
	{#if post.coverImage.photographer}
		<p class="cover-image-attribution">
			<em
				>Special thanks to <a href={post.coverImage.attribution}>{post.coverImage.photographer}</a> for
				the cover image.
			</em>
		</p>
	{:else if post.coverImage.attribution}
		<p class="cover-image-attribution">
			<em>Image sourced from <a href={post.coverImage.attribution}>here</a>.. </em>
		</p>
	{/if}
{/if}

{@html post.content.html}

<style>
	img {
		max-width: 100%;
		border-radius: 5px;
		margin-bottom: 30px;
		box-shadow: 5px 5px 20px lightgray;
	}

	h1 {
		font-size: 3rem;
	}

	.subtitle {
		margin-bottom: 50px;
		color: rgb(71, 71, 71);
	}

	.cover-image-attribution {
		text-align: center;
		color: gray;
	}

	.details {
		color: gray;
	}
</style>
