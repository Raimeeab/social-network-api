const { Schema, model, Types } = require('mongoose');
const moment = require('moment');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String, 
            required: true, 
            minlength: 1,
            maxlength: 280
        }, 
        createdAt: {
            type: Date, 
            default: Date.now,
            get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a'),
        },
        username: {
            type: String, 
            required: true, 
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
          getters: true,
        },
        id: false,
    },
);

const Thought = model('Thought', thoughtSchema);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

module.exports = Thought;