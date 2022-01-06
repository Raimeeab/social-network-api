const router = require('express').Router();

const {
    allThoughts,
    thoughtById, 
    createThought,
    deleteThought
} = require('../../controllers/thoughtController');

router
    .route('/')
    .get(allThoughts)
    .post(createThought);

router
    .route('/:id')
    .get(thoughtById)
    .delete(deleteThought);

module.exports = router;