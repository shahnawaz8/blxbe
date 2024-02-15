var express = require('express');
var router = express.Router();
var userController = require("../controllers/user");
const jwtAuth = require('../auth/jwtAuth');
let multer = require("multer");

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB limit
    },
});
router.post("/connectWithWallet",userController.connectWithWallet);

router.get("/getUserDetails",jwtAuth.authenticateToken,userController.getUserDetails);

router.post('/upload-image',upload.single('image'),userController.uploadImage);

module.exports = router;