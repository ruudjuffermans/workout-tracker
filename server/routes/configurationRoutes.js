const express = require('express');
const { configurationController } = require('../controllers');

const router = express.Router();

router.put('/', configurationController.changeConfiguration);

module.exports = router;