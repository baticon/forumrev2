import { gql } from "@apollo/client";

export const VOTE_POST = gql`
  mutation ($linkId: ID!) {
    vote(linkId: $linkId) {
      id
    }
  }
`;
