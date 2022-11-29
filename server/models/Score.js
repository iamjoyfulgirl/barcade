const { Schema, model, Types } = require('mongoose');

const scoreSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User', 
        },
        username: {
            type: String,
            required: true,
        },
        score: {
            type: Number,
            required: true,
        },
        gameId: {
            type: Schema.Types.ObjectId,
            ref: 'Game',
        },
        gameName: {
            type: String,
            required: true,
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        timestamps: true,
    },
);

const Score = model('score', scoreSchema);

module.exports = { Score, scoreSchema };