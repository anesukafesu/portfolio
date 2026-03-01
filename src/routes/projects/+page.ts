export function load() {
    return {
        projects: [{
            title: "Cinnamon",
            projectId: "cinnamon",
            htmlDescription: `
                <p>A small programming language I created to learn how interpreters work. 
                The grammar is simple, but Turing-complete. I wrote the interpreter in
                TypeScript and the source code is hosted on <a href="https://github.com/anesukafesu/cinnamon">
                GitHub</a>. I also built a <a href="https://cinnamon.anesu.dev">small website</a>
                that includes a tutorial and playground to learn and try out the language in your browser.</p>
            `,
        }]
    }
}