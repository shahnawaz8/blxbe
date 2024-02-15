var express = require('express');
var router = express.Router();
var userController = require("../controllers/user")

router.post("/connectWithWallet",userController.connectWithWallet);

module.exports = router;