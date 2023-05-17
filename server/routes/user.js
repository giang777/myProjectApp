const express = require('express');
const UserCTL = require('../controller/userCTL.js');
const router = express.Router();

router.get('/',UserCTL.GetList);
router.post('/add',UserCTL.AddUser);
router.post('/delete',UserCTL.DeleteUser);
router.post('/update',UserCTL.UpdateUser);

module.exports = router;