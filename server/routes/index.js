const Router = require('express');
const router = Router();
const typeRouter = require('./typeRouter');
const userRouter = require('./userRouter');
const challengeRouter = require('./challengeRouter');
const difficultyRouter = require('./difficultyRouter');

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/challenge', challengeRouter);
router.use('/difficulty', difficultyRouter);

module.exports = router;
