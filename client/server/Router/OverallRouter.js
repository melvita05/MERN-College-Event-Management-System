const express = require("express");
const router = express.Router();
const {Count} = require('../Controller/OverallController');

router.get('/getover',Count);

module.exports = router;