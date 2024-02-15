const User = require("../models/User");
const bcrypt = require("bcrypt");
exports.connectWithWallet = async (req, res) => {
    try {
        let {userWalletAddress} = req.body;
        if (userWalletAddress == undefined) {
            return res.json(Response.parse(false, 'name is a mandatory field'));
        }
        let user = await User.findOne({userWalletAddress});

        if(user){
            return res.status(200).json({success:true, user})
        }

        let data = {
            userWalletAddress: userWalletAddress,
        }
        if(req.body.name) data.name = req.body.name;
        if(req.body.profileUrl) data.profileUrl = req.body.profileUrl;
        if(req.body.description) data.description = req.body.description;
        let userData = await User.create(data);
        return res.status(200).json({success:false, data})
    } catch (error) {
        console.log(error);
        return res.json({success:true,message: "Something went wrong"});
    }
}

