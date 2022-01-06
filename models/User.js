const { Schema, model } = require("mongoose");
const validate = require("mongoose-validator");
const thoughtSchema = require("./Thought");

// Validates email meets requirements
const emailValidator = [
  validate({
    validator: "matches",
    arguments: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  }),
];

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      validate: emailValidator,
      required: [true, "Email required"],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const User = model("User", userSchema);

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

module.exports = User;
