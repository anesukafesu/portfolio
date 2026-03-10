function createQuery(pageNumber: number) {
	return `
    query {
      publication(id: "5f50158e98ae9829ac3da76a") {
        postsViaPage(pageSize: 20, page: ${pageNumber}) {
          totalDocuments
          pageInfo {
            nextPage
            previousPage
          }
          nodes {
            slug
            publishedAt
            title
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

	console.log(json);

	return {
		totalDocuments: json.data.publication.postsViaPage.totalDocuments,
		nextPage: json.data.publication.postsViaPage.pageInfo.nextPage,
		previousPage: json.data.publication.postsViaPage.pageInfo.previousPage,
		posts: json.data.publication.postsViaPage.nodes
	};
}
