<script lang="ts">
	import '@fontsource/google-sans/400.css';
	import '@fontsource/google-sans/500.css';
	import '@fontsource/google-sans/400-italic.css';
	import '@fontsource/silkscreen';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<nav>
		<a class="nav-link" href="/">Home</a>
		<ul>
			<li><a class="nav-link" href="/projects">Projects</a></li>
			<li><a class="nav-link" href="/resume">Resume</a></li>
			<li><a class="nav-link" href="https://blog.anesu.dev">Blog</a></li>
		</ul>
	</nav>
</header>

<main>
	{@render children()}
</main>

<style>
	:global(body) {
		background-size: 40px 40px;
		background-image:
				linear-gradient(to right, #d1d1d1 1px, transparent 1px),
				linear-gradient(to bottom, #d1d1d1 1px, transparent 1px);
		font-family: 'Google Sans', sans-serif;
	}

	:global(a) {
		text-decoration: none;
		color: black;
		font-weight: 500;
		margin: 0 -5px;
		padding: 0 5px;
		border-radius: 0.8em 0.3em;
		background: rgb(193, 255, 196);
		-webkit-box-decoration-break: clone;
		box-decoration-break: clone;
	}

	:global(h1) {
		font-family: 'Silkscreen', 'system-ui';
		font-size: 3rem;
		color: #233b3b;
	}

	.nav-link {
		color: black;
		background: white;
		padding: 0;
		margin: 0;
	}

	main, header {
		max-width: 800px;
		margin: 0 auto;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	ul {
		list-style-type: none;
		display: flex;
		gap: 10px;
	}
</style>
