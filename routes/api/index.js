const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');

router.use('/thoughts', thoughtRoutes);

module.exports = router;