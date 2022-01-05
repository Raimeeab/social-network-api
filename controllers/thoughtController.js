const { Thought, User } = require('../models');

const thoughtController = {
    // GET all Thoughts 
    allThoughts(req, res) {
        Thought.find({})
            .populate({
                path: "user",
                select: "-__v"
            })
            .select("-__v")
            .sort({ _id: -1 })
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log("An error has occurred:", err);
                res.status(500).json(err);
            })
    }, 

    // GET Thought by ID 
    thoughtById(req, res) {
        Thought.findOne({ _id: params.id})
            .populate({
                path: "user", 
                select: "-__v"
            })
            .select("-__v")
            .sort({ _id: -1 })
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log("An error has occurred:", err);
                res.status(500).json(err);
            })
    }
};

module.exports = thoughtController