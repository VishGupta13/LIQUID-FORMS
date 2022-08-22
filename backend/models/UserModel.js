const {Schema,model} = require('../connection');

const mySchema = new Schema({
    name: String,
    email: String,
    password: String,
    avatar: String,
    createdAt: Date
});

module.exports = model('usercollection', mySchema);