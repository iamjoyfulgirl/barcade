// TODO: import models and schemas here
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { User, Chat, Message, Score, Game } = require('../models');

//.populate drinks or messages??
const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("drink");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    users: async () => {
      return await User.find({});
    },
    user: async (parent, { userId }) => {
        return await User.findOne({ _id: userId });
    },
    chats: async (parent, args) => {
      return await Chat.find({});
    },
    chat: async (parent, { chatId }) => {
      return await Chat.findOne({ _id: chatId });
    },
    messages: async (parent, args) => {
      return await Message.find({});
    },
    userMessages: async (parent, { messageId }) => {
      return await Message.findOne({ _id: messageId });
    },
    scores: async (parent, args) => {
      return await Score.find({});
    },
    userScores: async (parent, { userId }) => {
      return await Score.findOne({ userId: userId });
    },
    games: async (parent, args) => {
      return await Game.find({});
    },
    game: async (parent, { gameId }) => {
      return await Game.findOne({ gameId: gameId });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      console.log('addUser called');
      const user = await User.create({ username, email, password });
      const token = await signToken(user);
      console.log("user:", user, token);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
    addChat: async (parent, args, context) => {
      console.log('addChat called');
      // if (context.user) {
        return await Chat.create(args);
      // }
      // throw new AuthenticationError('You need to be logged in!');
    },
    addToChat: async (parent, { chatId, userId }, context) => {
      console.log('addToChat called');
      // if (context.user) {
        await Chat.findOneAndUpdate(
          { _id: chatId },
          { userId: userId },
        );
      // }
      // throw new AuthenticationError('You need to be logged in!');
    },
    addMessage: async (parent, args, context) => {
      console.log('addMessage called');
      // if (context.user) {
        const newMessage = await Message.create(args);
        await User.findOneAndUpdate(
          { _id: args.sender },
          { $push: { messages: args } },
          { new: true },
        );
        return newMessage;
      // }
      // throw new AuthenticationError('You need to be logged in!');
    },
    addScore: async (parent, args, context) => {
      console.log('addScore called');
      // if (context.user) {
        const newScore = await Score.create(args);
        await User.findOneAndUpdate(
          { _id: args.userId },
          { $push: { scores: args } },
          { new: true },
        );
        await Game.findOneAndUpdate(
          { _id: args.gameId },
          { $push: { scores: args } },
          { new: true },
        );
        return newScore;
      // }
      // throw new AuthenticationError('You need to be logged in!');
    },
    addGame: async (parent, args, context) => {
      console.log('addgame called');
      return await Game.create(args);
    },
  },
};

module.exports = resolvers;
