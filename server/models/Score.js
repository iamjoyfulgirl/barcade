const { Schema, model, Types } = require('mongoose');

const scoreSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User', 
        },
        score: {
            type: Int,
            required: true,
        },
        createdAt:{
            type: Date,
            default: Date.now,
            get: (date) => {
                if (date) return `${date.toLocaleDateString('en-us', {  month: 'short' })} ${formatDay(date.getDate())}, ${date.getFullYear()} at ${date.toLocaleTimeString('en-us',)}`
            },
        },
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
            getters: true,
        },
    },
);

const formatDay = (day) => {
    if (day > 3 && day < 21) return day + 'th';
  switch (day % 10) {
    case 1:  return day + "st";
    case 2:  return day + "nd";
    case 3:  return day + "rd";
    default: return day + "th";
  };
};

const Score = model('score', scoreSchema);

module.exports = { Score, scoreSchema };