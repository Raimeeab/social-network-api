const { Schema, model, Types } = require('mongoose');
const validate = require('mongoose-validator');
const moment = require('moment');

// Validate the min and max length of a thought/ reaction string 
const lengthValidator = [
    validate({
      validator: 'isLength',
      arguments: [1, 280],
      message: 'Thought should be between 1 and 280 characters'
    })
];

const reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      reactionBody: {
        type: String,
        required: true,
        trim: true,
        validate: lengthValidator,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
      }
    },
    {
      toJSON: {
        getters: true
      }
    }
  );

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String, 
            required: true, 
            validate: lengthValidator,
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
    },
);

const Thought = model('thought', thoughtSchema);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

module.exports = Thought;