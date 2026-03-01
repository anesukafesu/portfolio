<script>
    let { data } = $props();
</script>

<h1>Projects</h1>

{#each data.projects as project}
    <div>
        <h2>{project.title}</h2>
        <p>{@html project.htmlDescription}</p>
    </div>
{/each}