const jwt = require('jsonwebtoken');
const secretKey = "Shahnawaz";
const User = require('../models/User');
const crypto = require("crypto");
const moment = require('moment')
async function generateAuthToken(userWalletAddress) {
    let payload = userWalletAddress + " " + crypto.randomBytes(20).toString('hex');
    let token = await jwt.sign({ payload }, secretKey, { expiresIn: '15m' });
    let expiredTime = moment().add(15, 'minutes').toDate();
    console.log(token);
    return { token, expiresIn: expiredTime }
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) {
        res.status(401).send({
            response_code: 401,
            response: "Not Authenticated",
        });
        return false;
    }
    jwt.verify(token, secretKey, async (err, user) => {

        if (err) {
            return res.status(403).send({
                response_code: 403,
                response: "Invalid Token",
            });
        }
        let decodedArray = user.payload.split(" ");
        let userWalletAddress = decodedArray[0];
        let userData = await User.findOne({ userWalletAddress }).lean();
        req.userData = userData
        next();
    });
};
module.exports = { authenticateToken, generateAuthToken };
