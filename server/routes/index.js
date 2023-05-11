const express = require('express');
const router = express.Router();
const homeCTL = require("../controller/main.js");
/* GET home page. */
router.get('/', homeCTL.GetList);

module.exports = router;
