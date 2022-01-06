const { Thought, User } = require('../models');

const thoughtController = {

    // GET all Thoughts 
    allThoughts(req, res) {
        Thought.find({})
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log('An error has occurred: ', err);
                res.status(500).json(err);
            })
    }, 

    // GET Thought by ID 
    thoughtById(req, res) {
        Thought.findOne({ _id: req.params.id })
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log('An error has occurred:', err);
                res.status(500).json(err);
            })
    }, 

    // POST a Thought
    createThought(req, res) {
        Thought.create(req.body)
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log('An error has occurred: ', err);
            res.status(500).json(err);
        });
    }, 

};

module.exports = thoughtController;