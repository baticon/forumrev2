import { gql } from "@apollo/client";

// export const GET_SEARCH = gql`
//   query($filter: String!) {
//     feed(filter: $filter) {
//       count
//       links {
//         id
//         description
//         url
//         postedBy {
//           id
//           name
//         }
//         votes {
//           id
//           user {
//             id
//             name
//           }
//         }
//       }
//     }
//   }
// `;

export const GET_SEARCH = (param) => {
  return gql`
            query($filter: String!) {
                feed(filter: ${param}) {
                count
                links {
                    id
                    description
                    url
                    postedBy {
                    id
                    name
                    }
                    votes {
                    id
                    user {
                        id
                        name
                    }
                    }
                }
                }
            }
            `;
};

// query ($filter: String!){
//     feed(filter: $filter) {
//       count
//       links {
//         id
//         description
//         url
//         postedBy {
//           id
//           name
//         }
//         votes {
//           id
//           user {
//             id
//             name
//           }
//         }
//       }
//     }
//   }

// query {
//     feed($filter: String!) {
//       count
//       links {
//         id
//         description
//         url
//         postedBy {
//           id
//           name
//         }
//         votes {
//           id
//           user {
//             id
//             name
//           }
//         }
//       }
//     }
//   }
