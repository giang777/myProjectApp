const express = require('express');
const UserCTL = require('../controller/userCTL.js');
const UserAPI = require('../api/userApi.js');
const router = express.Router();
const api = express.Router();

router.get('/',UserCTL.GetList);
router.post('/add',UserCTL.AddUser);
router.post('/delete',UserCTL.DeleteUser);
router.post('/update',UserCTL.UpdateUser);

api.get('/get',UserAPI.Get);
api.post('/checkLogin',UserAPI.CheckLogin);
module.exports = {router,api};