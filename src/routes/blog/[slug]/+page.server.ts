import { error } from '@sveltejs/kit';

function createQuery(slug: string) {
	return `
    query {
      publication(id: "5f50158e98ae9829ac3da76a") {
        post(slug: "${slug}") {
          title
          subtitle
          publishedAt
          updatedAt
          readTimeInMinutes
          coverImage {
            url
            attribution
            photographer
          }
          content {
            html
          }
        }
      }
    }
  `;
}

export async function load({ params }: { params: { slug: string } }) {
	const response = await fetch('https://gql.hashnode.com', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: createQuery(params.slug),
			variables: {}
		})
	});

	if (!response.ok) {
		// error(response.status);
		console.log(response.statusText);
	}

	const json = await response.json();

	return {
		post: json.data.publication.post
	};
}
