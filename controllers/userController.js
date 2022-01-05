const { Though, User } = require('../models');

const userController = {

    // GET all Users
    allUsers(req, res) {
        User.find({})
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log('An error ha occurred: ', err);
                res.status(500).json(err);
            });
    },

    // GET User by ID
    userById(req, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this ID!' });
                    return;
                };
                res.json(dbUserData)
            })
            .catch(err => {
                console.log('An error ha occurred: ', err);
                res.status(500).json(err);
            });
    },

    // POST a User 
    createUser(req, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log('An error has occurred: ', err);
                res.status(500).json(err);
            });
    },
}

module.exports = userController;