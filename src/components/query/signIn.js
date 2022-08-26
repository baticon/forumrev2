import { gql } from "@apollo/client";

export const QUERY_TO_LOGIN = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
