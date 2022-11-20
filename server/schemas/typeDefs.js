const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        drink: String
        pic: String!
        scores: [Score]
        messages: [Message]
    }

    type Score {
        _id: ID!
        userId: ID!
        score: Int!
    }

    type Message {
        _id: ID!
        sender: ID!
        content: String!
        chat: ID!
    }

    type Chat {
        _id: ID!
        chatName: String!
        isGroupChat: Boolean!
        users: [User]
        latestMessage: ID
        groupAdmin: ID!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]!
        user(userId: ID!): User
        me: User
        chats: [Chat]!
        chat(chatId: ID!): Chat
        messages: [Message]!
        userMessages(userId: ID!): Chat
        scores: [Score]!
        userScores(userId: ID!): Score
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth

        addChat(chatName: String!, isGroupChat: Boolean!, groupAdmin: ID): Chat
        addToChat(chatId: ID!, userId: ID!): Chat
        addMessage(sender: ID!, Chat: ID!, content: String!): Message
        addScore(userId: ID!, gameId: ID!, score: Int!): Score
    }
`;

module.exports = typeDefs;