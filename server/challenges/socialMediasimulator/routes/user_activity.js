const { handleUserCommentsController, handleFeedController } = require('../controllers/user_activity');

const router = require('express').Router();

router.post('/feed',handleFeedController);
router.post('/comments',handleUserCommentsController);

module.exports =  router;
