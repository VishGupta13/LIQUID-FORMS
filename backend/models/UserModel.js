const {Schema,model} = require('../connection');

const mySchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    dob: String,
    pincode: String,
    course: String,
    avatar: String,
    createdAt: Date
});

module.exports = model('usercollection', mySchema);