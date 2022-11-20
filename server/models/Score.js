const { Schema, model, Types } = require('mongoose');

const scoreSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User', 
        },
        score: {
            type: Number,
            required: true,
        },
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
            getters: true,
        },
        timestamps: true,
    },
);

const Score = model('score', scoreSchema);

module.exports = { Score, scoreSchema };