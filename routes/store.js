var Cd = require('../models/cd').Cd;

exports.findAll = function(req, res) {
    Cd.find({}, function(err, docs) {
        if(!err) {
        res.json(200, { cds: docs });
        } else {
        res.json(500, { message: err });
        }
    });
}


exports.saveCD = function (req, res) {
    var cdId= req.body.id;
    
    res.json(200, { cds: cdId });
}

