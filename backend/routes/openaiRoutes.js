const express = require('express')
const router = express.Router();
const controller = require('../controllers/openaiController')

router.post('/generate-image', controller.generateImage);
module.exports = router;