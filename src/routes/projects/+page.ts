export function load() {
	return {
		projects: [
			{
				title: 'Fourwalls',
				projectId: 'fourwalls',
				htmlDescription: `
                <p>
                    Fourwalls is an AI-powered housing marketplace for the Kigali real estate market,
                    developed as my Bachelor's degree capstone project. The platform provides standard
                    marketplace functionality such as creating and browsing property listings, reporting
                    listings, and communicating with agents.
                </p>
                <p>
                    In addition to typical marketplace features, the platform includes a built-in chat
                    system with both human and AI agents. The AI assistant is implemented using
                    LangGraph and can search the platform’s property listings using tool-based queries
                    to help users find suitable homes.
                </p>
                <p>
                    Fourwalls also includes a recommendation engine that suggests similar properties
                    using cosine similarity across multiple data sources, including structured property
                    features, interior and exterior images, and neighborhood descriptions. Similarity
                    results are precomputed and cached to improve performance.
                </p>
                <p>
                    To help real estate agents migrate from social media listings, the platform can
                    analyze Facebook posts and use the Gemini LLM to extract listing information as
                    structured JSON, which is then added to the database.
                </p>
                <p>
                    The frontend is built with React, while data is stored on Supabase. Supporting
                    services for chat, recommendations, and listing migration are implemented in Python
                    using FastAPI and deployed with Docker. The system follows a hybrid architecture,
                    combining a monolithic core application with supporting microservices.
                </p>
                `
			},
			{
				title: 'Pennywise',
				projectId: 'pennywise',
				htmlDescription: `
                <p>
                    Pennywise is a budgeting and expense tracking backend I built to practice clean architecture,
                    SOLID design principles, and proper development vs production environment separation.
                    The core business logic is written in TypeScript and designed to be independent of the
                    infrastructure layer.
                </p>
                <p>
                    The application currently uses Appwrite TablesDB for persistent storage and Redis for
                    temporary data such as sessions and one-time passwords. Because the system is loosely
                    coupled, other databases or services can be integrated with minimal changes.
                </p>
                <p>
                    The API layer is implemented with Express, but the architecture allows alternative
                    presentation layers to be added without affecting the domain logic.
                    The source code is available on <a href="https://github.com/anesukafesu/pennywise">GitHub</a>.
                </p>
                `
			},
			{
				title: 'Cinnamon',
				projectId: 'cinnamon',
				htmlDescription: `
                <p>
                    I built a small programming language to better understand how interpreters work.
                    The language has a simple grammar but is fully Turing-complete.
                    I implemented the interpreter in TypeScript and published the source code on
                    <a href="https://github.com/anesukafesu/cinnamon">GitHub</a>. I also created a
                    <a href="https://cinnamon.anesu.dev">companion website</a> with a tutorial and
                    an in-browser playground so visitors can learn the language and experiment with
                    it directly.
                </p>
            `
			},
			{
				title: 'Relay',
				projectId: 'relay',
				htmlDescription: `
                <p>
                    Relay is a Shopify app that helps dropshippers automatically forward incoming store
                    orders to their suppliers. It integrates with the Shopify Admin API to capture new
                    orders and relay the relevant order details, eliminating the need for manual order
                    forwarding.
                </p>
                <p>
                    The application is built with JavaScript, using Firebase as the backend datastore.
                    The frontend is implemented with React and Shopify’s Polaris design system to provide
                    a seamless experience inside the Shopify Admin interface.
                </p>
                <p>
                    The source code is available on
                    <a href="https://github.com/anesukafesu/relay">GitHub</a>.
                </p>
                `
			},
			{
				title: 'Pedigree',
				projectId: 'pedigree',
				htmlDescription: `
                <p>
                    Pedigree is an application that helps farmers discover suitable breeds and cultivars
                    based on desired traits such as yield, climate tolerance, and other characteristics.
                    The platform provides a searchable catalog where farmers can filter breeds and
                    cultivars according to their needs.
                </p>
                <p>
                    The system also includes a supplier dashboard that allows suppliers to log in and
                    create new breeds or cultivars while recording their relevant traits. This enables
                    suppliers to maintain structured data that farmers can easily explore and compare.
                </p>
                <p>
                    The application is built with TypeScript and React. It uses Prisma as the ORM with
                    SQLite as the database. Because Prisma supports multiple database providers, the
                    data layer can be swapped without affecting the application’s core logic.
                </p>
                `
			},
			{
				title: 'Score',
				projectId: 'score',
				htmlDescription: `
                <p>
                    Score is a classical music streaming platform I am currently developing. The goal of
                    the project is to publish public domain classical recordings in a thoughtfully
                    designed interface that helps listeners discover and appreciate the beauty of
                    classical music.
                </p>
                <p>
                    Unlike typical streaming services that treat classical music like any other genre,
                    Score aims to present works in a way that respects their structure, highlighting
                    composers, movements, and historical context while providing a focused listening
                    experience.
                </p>
                <p>
                    The project is currently under active development.
                </p>
                `
			}
		]
	};
}
