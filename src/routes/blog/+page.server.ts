import type { PageLoad } from './$types';

const query = `
query PublicationPosts($after: String) {
  publication(id: "5f50158e98ae9829ac3da76a") {
    posts(first: 20, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          slug
          publishedAt
        }
      }
    }
  }
}
`;

export const load: PageLoad = async ({ fetch }) => {
  let after: string | null = null;
  let hasNextPage = true;

  const allPosts = [];

  while (hasNextPage) {
    const res = await fetch('https://gql-beta.hashnode.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query,
        variables: { after }
      })
    });

    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }

    const json = await res.json();

    const posts = json.data.publication.posts;

    allPosts.push(
      ...posts.edges.map((edge: any) => edge.node)
    );

    hasNextPage = posts.pageInfo.hasNextPage;
    after = posts.pageInfo.endCursor;
  }

  return {
    posts: allPosts
  };
};
