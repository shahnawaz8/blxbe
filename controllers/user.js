const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwtAuth = require('../auth/jwtAuth');
const UploadService = require('../services/upload')
exports.connectWithWallet = async (req, res) => {
    try {
        let userWalletAddress = req.body.userwalletaddress;
        console.log(userWalletAddress, req.headers)
        if (userWalletAddress == undefined) {
            return res.json({ success: false, message: 'userWalletAddress is a mandatory field' });
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
        return res.status(200).json({ success: true, data: resp })
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "Something went wrong" });
    }
}

exports.getUserDetails = async (req, res) => {
    try {
        let { userWalletAddress } = req;

        let user = await User.findOne({ userWalletAddress }).lean();;
        if (user) {
            return res.json({ success: true, data: user })
        }
        return res.json({ success: false, message: 'user not found' })
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "Something went wrong" });
    }
}

exports.updateUser = async (req, res) => {
    try {
        let { userWalletAddress } = req;
        let {name, profileUrl, description } = req.body;

        let updateObj ={}
        if(name) updateObj.name = name;
        if(profileUrl) updateObj.profileUrl = profileUrl;
        if(description) updateObj.description = description;
        if(!Object.keys(updateObj).length) return res.json({ success: true, message: 'Please select at least one field' });
        let user = await User.findOneAndUpdate({ userWalletAddress: userWalletAddress}, {$set: updateObj}).lean();;
        
        return res.json({ success: true, message: 'user profile updated' })
    } catch (error) {
        console.log(error);
        return res.json({ success: true, message: "Something went wrong" });
    }
}

exports.uploadImage = async (req, res) => {
    try {
        const file = req.file;
        await UploadService.uploadFile(file, (err, data) => {
            if (err) return res.send({ success: false, message: 'upload failed' });
            return res.send({ success: true, data: data });
        });
    } catch (error) {
        console.log(error)
        return res.send({ success: false, message: 'error getting link' });

    }
}