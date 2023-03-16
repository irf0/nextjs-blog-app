/** *************************************************************
 * Any file inside the folder pages/api is mapped to /api/* and  *
 * will be treated as an API endpoint instead of a page.         *
 *************************************************************** */
import { GraphQLClient, gql } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default async function comments(req, res) {
  const grapghQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation createComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
        name
        email
        comment
      }
    }
  `;
  try {
    const result = await grapghQLClient.request(query, req.body);
    console.log(req.body);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
}
