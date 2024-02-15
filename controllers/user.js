const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwtAuth = require('../auth/jwtAuth');
exports.connectWithWallet = async (req, res) => {
    try {
        let { userWalletAddress } = req.body;
        if (userWalletAddress == undefined) {
            return res.json(Response.parse(false, 'userWalletAddress is a mandatory field'));
        }
        let user = await User.findOne({ userWalletAddress }).lean();;

        let { token, expiresIn } = await jwtAuth.generateAuthToken(userWalletAddress);
        if (user) {
            let resp = {
                userWalletAddress: user.userWalletAddress
            }
            if (user.name) resp.name = user.name;
            if (user.profileUrl) resp.profileUrl = user.profileUrl;
            if (user.description) resp.description = user.description;
            resp.authToken = token;
            resp.authTokenExpireIn = expiresIn
            return res.status(200).json({ success: true, data: resp })
        }

        let data = {
            userWalletAddress: userWalletAddress,
        }
        if (req.body.name) data.name = req.body.name;
        if (req.body.profileUrl) data.profileUrl = req.body.profileUrl;
        if (req.body.description) data.description = req.body.description;
        user = await User.create(data);
        let resp = {
            userWalletAddress: user.userWalletAddress
        }
        if (user.name) resp.name = user.name;
        if (user.profileUrl) resp.profileUrl = user.profileUrl;
        if (user.description) resp.description = user.description;
        resp.authToken = token;
        resp.authTokenExpireIn = expiresIn
        return res.status(200).json({ success: false, data: resp })
    } catch (error) {
        console.log(error);
        return res.json({ success: true, message: "Something went wrong" });
    }
}

