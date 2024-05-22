const express = require('express');
const { feedbackController } = require('../controllers');

const router = express.Router();

router.post('/', feedbackController.insertFeedback);

module.exports = router;