function createQuery(pageNumber: number) {
	return `
    query {
      publication(id: "5f50158e98ae9829ac3da76a") {
        posts(first: 10) {
          edges {
            node {
              id,
              slug,
              title,
              subtitle,
              coverImage {
                url,
                isPortrait,
                attribution,
                photographer,
              }
            }
          }
        }
      }
    }
  `;
}

export async function load() {
	const response = await fetch('https://gql.hashnode.com', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: createQuery(1),
			variables: {}
		})
	});

	const json = await response.json();

	return {
		posts: json.data.publication.posts.edges.map((obj: any) => obj.node)
	};
}
