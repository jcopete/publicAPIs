var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var cdSchema = new Schema({
id : { type: String, required: true, trim: true, index: { unique: true } }
, category : { type: String, required: true }
, name : { type: String, required: true }
, status: { type: String, required: true }
, date_created : { type: Date, required: true, default: Date.now }
});

var cd = mongoose.model('cd', cdSchema);

module.exports = {
    Cd: cd
};