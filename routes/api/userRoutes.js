const router = require('express').Router();

const {
    allUsers, 
    userById, 
    createUser
} = require('../../controllers/userController');

router
    .route('/')
    .get(allUsers)
    .post(createUser);


router
    .route('/:id')
    .get(userById);

module.exports = router; 