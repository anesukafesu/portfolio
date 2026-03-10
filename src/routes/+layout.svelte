<script lang="ts">
	import '@fontsource/google-sans/400.css';
	import '@fontsource/google-sans/500.css';
	import '@fontsource/google-sans/400-italic.css';
	import '@fontsource/silkscreen';
	import '@fontsource/cardo';
	import { navigating } from '$app/state';
	import favicon from '$lib/assets/favicon.ico';
	import logo from '$lib/assets/logo.png';
	import Loading from '../components/Loading.svelte';

	console.log(navigating.complete);

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<nav>
		<a id="logo" class="nav-link" href="/"><img src={logo} alt="My logo" />Anesu Kafesu</a>
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
	{#if navigating.to === null}
		{@render children()}
	{:else}
		<Loading />
	{/if}
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

	:global(blockquote) {
		padding-left: 5%;
		border-left: 2px solid gray;
		margin: 30px 0;
		font-style: italic;
		color: #343434;
	}

	:global(h1) {
		margin: 3rem 0;
	}

	:global(h2) {
		margin-top: 4rem;
	}

	:global(ol, ul) {
		list-style-position: inside;
	}

	header {
		position: sticky;
		top: 0;
		background-color: white;
		height: 80px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid lightgray;
		padding: 20px;
	}

	nav {
		height: 100%;
		display: flex;
		align-items: center;
	}

	#logo {
		height: 100%;
		display: flex;
		align-items: center;
		gap: 10px;
	}

	img {
		height: 100%;
	}

	.nav-link {
		color: black;
		text-decoration: none;
		font-weight: bold;
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
