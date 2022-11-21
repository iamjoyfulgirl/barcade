const db = require('../config/connection');
const { Chat, Game} = require('../models');

const chatData = require('./chatData.json');
const gameData = require('./gameData.json');

db.once('open', async () => {
  await Chat.deleteMany({});
  await Game.deleteMany({});

  const chats = await Chat.insertMany(chatData);
  const games = await Game.insertMany(gameData);

  console.log('Chat seeded!');
  console.log('Games seeded!');
  process.exit(0);
});
