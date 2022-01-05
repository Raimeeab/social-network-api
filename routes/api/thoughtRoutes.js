const router = require('express').Router();

const {
    allThoughts,
    thoughtById
} = require('../../controllers/thoughtController');

router
    .route('/')
    .get(allThoughts);

router
    .route('/:id')
    .get(thoughtById);

module.exports = router;