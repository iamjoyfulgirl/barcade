const { Schema, model, Types } = require('mongoose');

const messageSchema = new Schema(
    {
        sender: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        content: {
            type: String,
            required: true,
        },
        chat: {
            type: Schema.Types.ObjectId,
            ref: 'Chat',
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

const Message = model('message', messageSchema);

module.exports = { Message, messageSchema };