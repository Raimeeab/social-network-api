const router = require('express').Router();

const {
    allThoughts,
    thoughtById, 
    createThought
} = require('../../controllers/thoughtController');

router
    .route('/')
    .get(allThoughts)
    .post(createThought);

router
    .route('/:id')
    .get(thoughtById);

module.exports = router;