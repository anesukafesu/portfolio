function createQuery(pageNumber: number) {
	return `
    query {
      publication(id: "5f50158e98ae9829ac3da76a") {
        postsViaPage(pageSize: 10, page: ${pageNumber}) {
          pageInfo {
            nextPage
            previousPage
          }
          nodes {
            id
            slug
            title
            subtitle
            coverImage {
              url
              isPortrait
              attribution
              photographer
            }
          }
        }
      }
    }
  `;
}

export async function load({ params }: { params: { pageNumber: number } }) {
	const response = await fetch('https://gql.hashnode.com', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: createQuery(params.pageNumber),
			variables: {}
		})
	});

	const json = await response.json();

	return {
		nextPage: json.data.publication.postsViaPage.pageInfo.nextPage,
		previousPage: json.data.publication.postsViaPage.pageInfo.previousPage,
		posts: json.data.publication.postsViaPage.nodes
	};
}
