import { gql } from "@apollo/client";

export const QUERY_TO_REGISTER = gql`
  mutation ($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
    }
  }
`;
