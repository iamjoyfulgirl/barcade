// TODO: import models and schemas here
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { User, Chat, Message, Score } = require('../models');

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
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
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
  },
};

module.exports = resolvers;
