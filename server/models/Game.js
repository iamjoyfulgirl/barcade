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
   return (sortedScores.length > 10 ? sortedScores.slice(0, 10) : sortedScores);
});

const Game = model('Game', gameSchema);

module.exports = Game;