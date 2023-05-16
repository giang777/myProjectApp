const express = require('express');
const HomeCTL = require('../controller/main.js');
const router = express.Router();

/* GET home page. */
router.get('/',HomeCTL.GetList );

module.exports = router;
