<script lang="ts">
	import '@fontsource/google-sans/400.css';
	import '@fontsource/google-sans/500.css';
	import '@fontsource/google-sans/400-italic.css';
	import '@fontsource/silkscreen';
	import '@fontsource/cardo';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<nav>
		<a class="nav-link" href="/">Anesu Kafesu</a>
		<ul>
			<li><a class="nav-link" href="/projects">Projects</a></li>
			<!-- <li>
				<a
					class="nav-link"
					href="https://docs.google.com/document/d/1s1WfMLgYsulfnoBV91l47gbu3qF6OCd1Cy8ea7Uckro/export?format=pdf"
					>Resume</a
				>
			</li> -->
			<li><a class="nav-link" href="/blog">Blog</a></li>
		</ul>
	</nav>
</header>

<main>
	{@render children()}
</main>

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body) {
		font-family: 'Cardo', serif;
	}

	:global(p) {
		line-height: 2rem;
		margin: 20px 0;
		font-size: 1.1rem;
	}

	:global(a) {
		text-decoration: underline dashed 1px rgb(0, 0, 0);
		color: rgb(0, 72, 255);
		text-underline-offset: 5px;
	}

	:global(pre) {
		padding: 20px;
		background-color: rgb(245, 245, 245);
		border-radius: 10px;
		font-size: 1rem;
		line-height: 1.5rem;
	}

	.nav-link {
		color: black;
		text-decoration: none;
		font-weight: bold;
	}

	header {
		position: sticky;
		top: 0;
		background-color: white;
		height: 80px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid lightgray;
		padding: 0 20px;
	}

	nav {
		width: 100%;
		display: flex;
		justify-content: space-between;
		max-width: 1000px;
		margin: 0 auto;
	}

	ul {
		list-style-type: none;
		display: flex;
		gap: 10px;
	}

	main {
		max-width: 1000px;
		margin: 0 auto;
		padding: 50px 20px;
	}
</style>
