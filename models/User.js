var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const newSchema = new Schema({
    name: { type: String, require: true },
    profileUrl:{type:String , default : 'https://a.wordpress.com/avatar/unknown-128.jpg'},
    userWalletAddress:{type:String, default:'' },
    description:{ type:String , default : ''}
}, {
    timestamps: true
})

const User =  mongoose.model('User', newSchema);
module.exports = User;