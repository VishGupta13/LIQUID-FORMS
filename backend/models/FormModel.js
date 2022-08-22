const { Types } = require('mongoose');
const {Schema,model} = require('../connection');

const myScheme = new Schema({
    title: String,
    description: String,
    data: String,
    shared: Array,
    database: Object,
    settings: Object,
    responses: Array,
    createdBy: {type:Types.ObjectId,ref:"usercollection"},
    createdAt: Date


});

module.exports = model('usercollection',myschema);