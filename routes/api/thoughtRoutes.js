const router = require('express').Router();

const {
    allThoughts,
    thoughtById, 
    createThought,
    deleteThought,
    createReaction, 
} = require('../../controllers/thoughtController');

// http://localhost:3001/api/thoughts
router
    .route('/')
    .get(allThoughts)
    .post(createThought);

// http://localhost:3001/api/thoughts/:id
router
    .route('/:id')
    .get(thoughtById)
    .delete(deleteThought);

// http://localhost:3001/api/thoughts/:id/reactions/:reactionId
router
    .route('/:thoughtId/reactions')
    .post(createReaction)

module.exports = router;