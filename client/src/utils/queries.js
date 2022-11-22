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

export const QUERY_USERS = gql`
query Users {
  users {
    _id
    drink
    messages {
      _id
      chat
      content
      sender
    }
    pic
    scores {
      gameId
      score
      userId
    }
    username
  }
}
`;

export const QUERY_CHATS = gql`
query Chats {
  chats {
    _id
    chatName
    groupAdmin
    isGroupChat
    users {
      _id
      username
      pic
      messages {
        _id
        content
        sender
      }
    }
  }
}
`;

export const QUERY_CHAT = gql`
query Chat($chatId: ID!) {
  chat(chatId: $chatId) {
    _id
    chatName
    groupAdmin
    isGroupChat
    latestMessage
    users {
      _id
      pic
      username
      messages {
        _id
        chat
        content
        sender
      }
    }
  }
}
`;

export const QUERY_MESSAGES = gql`
query Messages {
  messages {
    _id
    chat
    content
    sender
  }
}
`;

export const QUERY_USER_MESSAGES = gql`
query UserMessages($userId: ID!) {
  userMessages(userId: $userId) {
    _id
    chatName
    groupAdmin
    isGroupChat
    users {
      _id
      pic
      username
      drink
      messages {
        content
        chat
        sender
      }

    }
  }
}
`;

export const QUERY_GAMES = gql`
query Games {
  games {
    _id
    gameName
    scores {
      _id
      gameId
      score
      userId
    }
    topScores {
      
    }
  }
}
`;

export const QUERY_GAME = gql`
query Game($gameId: ID!) {
  game(gameId: $gameId) {
    _id
    gameName
    scores {
      _id
      gameId
      score
      userId
    }
    topScores {
      _id
      gameId
      score
      userId
    }
  }
}
`;

export const QUERY_SCORES = gql`
query Scores {
  scores {
    _id
    gameId
    score
    userId
  }
}
`;

export const QUERY_USER_SCORES = gql`
query UserScores($userId: ID!) {
  userScores(userId: $userId) {
    _id
    gameId
    score
    userId
  }
}
`;









