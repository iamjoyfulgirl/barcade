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
        username: String!        
        score: Int!
        gameId: ID
        gameName: String!
    }

    type Message {
        _id: ID!
        sender: ID!
        content: String!
        chat: ID!
    }

    type Game {
        _id: ID!
        gameName: String!
        scores: [Score]
        topScores: [Score]
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
        games: [Game]!
        game(gameName: String!): Game
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth

        addChat(chatName: String!, isGroupChat: Boolean!, groupAdmin: ID): Chat
        addToChat(chatId: ID!, userId: ID!): Chat
        addMessage(sender: ID!, chat: ID!, content: String!): Message
        addScore(userId: ID!, username: String! gameName: String!, score: Int!): Score
        addGame(gameName: String!): Game
        addDrink(userId: ID!, drink: String!): User
    }
`;

module.exports = typeDefs;