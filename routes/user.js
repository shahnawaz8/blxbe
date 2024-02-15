var express = require('express');
var router = express.Router();
var userController = require("../controllers/user");
const jwtAuth = require('../auth/jwtAuth');

router.post("/connectWithWallet",userController.connectWithWallet);

router.get("/getUserDetails",jwtAuth.authenticateToken,userController.getUserDetails);

router.patch('/updateProfile',jwtAuth.authenticateToken,userController.updateUser)

module.exports = router;