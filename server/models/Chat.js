const { Schema, model } = require('mongoose');

const chatSchema = new Schema(
    {
        chatName: {
            type: String,
            trime: true,
        },
        isGroupChat: {
            type: Boolean,
            default: true,
        },
        users: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        ],
        latestMessage: {
            type: Schema.Types.ObjectId,
            ref: 'Message',
        },
        groupAdmin: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    },
);

const Chat = model('chat', chatSchema);

module.exports = Chat;