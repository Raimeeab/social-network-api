const { Schema, model, Types } = require('mongoose');
const validate = require('mongoose-validator');
const moment = require('moment');

// Validate the min and max length of a thought string 
const thoughtValidator = [
    validate({
      validator: 'isLength',
      arguments: [1, 280],
      message: 'Thought should be between 1 and 280 characters'
    })
];

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String, 
            required: true, 
            validate: thoughtValidator,
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
        // TODO: add reaction schema 
    },
    {
        toJSON: {
          getters: true,
        },
    },
);

const Thoughts = model('thoughts', thoughtSchema);

module.exports = Thoughts;