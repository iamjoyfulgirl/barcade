import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
query Me {
  me {
    _id
    drink
    email
    messages {
      _id
      chat
      content
      sender
    }
    pic
    scores {
      _id
      gameId
      score
      userId
    }
    username
  }
}
`;

