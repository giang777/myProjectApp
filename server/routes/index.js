const express = require('express');
const HomeCTL = require('../controller/indexCTL.js');
const router = express.Router();

/* GET home page. */
router.get('/',HomeCTL.GetList );

module.exports = router;
