<script>
	let { data } = $props();
</script>

<h1>Projects</h1>
<p>Here are some of the more interesting projects I have worked on:</p>
{#each data.projects as project (project.projectId)}
	<div>
		<h2>{project.title}</h2>
		<p>{@html project.htmlDescription}</p>
	</div>
{/each}
