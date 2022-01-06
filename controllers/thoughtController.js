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

    // DELETE a Thought 
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.id })
            .then(dbThoughtData => {
                if(!dbThoughtData) {
                    res.status(404).json({
                        message: 'Error: Thought does not exist.'
                    });
                };
                res.status(200).json({
                    message:'Thought deleted successfully.'
                });
            })
            .catch(err => {
                console.log('An error ha occurred: ', err);
                res.status(500).json(err);
            });
    },

    // POST a reaction 
    createReaction ({ params, body}, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $push: { reactions: body } },
            { new: true, runValidators: true }
        )
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought with this ID!' });
                return;
            }
            res.json(dbThoughtData)
        })
        .catch(err => res.json(err));
    },

};

module.exports = thoughtController;