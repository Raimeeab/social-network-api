const { Thought, User } = require("../models");

const userController = {
  // GET all Users
  allUsers(req, res) {
    User.find({})
      .populate("thoughts")
      .populate("friends")
      .select("-__v")
      .sort({ _id: -1 })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log("An error ha occurred: ", err);
        res.status(500).json(err);
      });
  },

  // GET User by ID
  userById(req, res) {
    User.findOne({ _id: req.params.id })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log("An error ha occurred: ", err);
        res.status(500).json(err);
      });
  },

  // POST a User
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log("An error has occurred: ", err);
        res.status(500).json(err);
      });
  },

  // DELETE a User
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.id })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({
            message: "Error: User does not exist.",
          });
        }
        res.status(200).json({
          message: "User deleted successfully.",
        });
      })
      .catch((err) => {
        console.log("An error ha occurred: ", err);
        res.status(500).json(err);
      });
  },

  // UPDATE a User
  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({
            message: "Error: User does not exist.",
          });
        } else {
          res.status(200).json({
            message: "User updated successfully.",
            // TODO: fix to show updated changes
            user: dbUserData,
          });
        }
      })
      .catch((err) => {
        console.log("An error ha occurred: ", err);
        res.status(500).json(err);
      });
  },

  // ADD a friend
  addFriend(req, res) {
    User.findByIdAndUpdate(
      req.params.id,
      { $push: { friends: req.params.friendId }},
      { new: true },
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({
            message: "Error: User does not exist.",
          });
        } else {
          res.status(200).json({
            message: "Friends updated successfully.",
            // TODO: fix to show updated changes
            user: dbUserData,
          });
        }
      })
      .catch((err) => {
        console.log("An error ha occurred: ", err);
        res.status(500).json(err);
      });
  },

  // REMOVE a friend
  deleteFriend(req, res) {
    User.findByIdAndUpdate(
      { _id: req.params.id },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((dbFriendData) => {
        if (!dbFriendData) {
          res.status(404).json({
            message: "Error: User does not exist.",
          });
        } else {
          res.status(200).json({
            message: "Friend deleted successfully.",
            // TODO: fix to show updated changes inside of previous results
            user: dbFriendData,
          });
        }
      })
      .catch((err) => {
        console.log("An error ha occurred: ", err);
        res.status(500).json(err);
      });
  },
};

module.exports = userController;
