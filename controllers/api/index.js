const router = require('express').Router();
const userRoutes = require('./userRoutes');
const reviewRoutes = require('./review-routes'); 
const seedRoutes = require('./seed-routes'); 

router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);
router.use('/seed', seedRoutes);

module.exports = router;
