const { Schema, model, Types } = require('mongoose');
const { scoreSchema } = require('./Score');

const gameSchema = new Schema(
    {
        gameName: {
            type: String,
            require: true,
        },
        scores: [scoreSchema],
    },
    {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    timestamps: true,
  },
);

gameSchema.virtual('topScores').get(function () {
   const sortedScores =  this.scores.sort((a, b) => a.score - b.score);
   const reversedScores = sortedScores.reverse();
   return (reversedScores.length > 10 ? reversedScores.slice(0, 10) : reversedScores);
});

const Game = model('Game', gameSchema);

module.exports = Game;