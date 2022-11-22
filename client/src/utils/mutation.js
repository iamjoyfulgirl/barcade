import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TO_CHAT = gql`
mutation AddToChat($chatId: ID!, $userId: ID!) {
  addToChat(chatId: $chatId, userId: $userId) {
    _id
    chatName
    isGroupChat
    users {
      username
      pic
      _id
    }
  }
}
`;

export const ADD_SCORE = gql`
mutation AddMessage($sender: ID!, $chat: ID!, $content: String!) {
  addMessage(sender: $sender, chat: $chat, content: $content) {
    _id
    chat
    content
    sender
  }
}
`;

export const ADD_DRINK = gql`
mutation AddDrink($userId: ID!, $drink: String!) {
  addDrink(userId: $userId, drink: $drink) {
    _id
    drink
    messages {
      content
      sender
    }
    username
  }
}
`;