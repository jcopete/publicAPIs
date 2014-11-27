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
    var cdId = req.body.id;
    
    var newCd = new Cd();
    newCd.id=cdId;
    newCd.category=req.body.category;
    newCd.name=req.body.name;
    newCd.status=req.body.status;
    
    newCd.save(function(err) {
    if(!err) {
        res.status(201).json(201, {message: "Cd created with name: " + newCd.name });
    } else {
        res.status(500).json( {message: "Could not create cd. Error: " + err});
    }
    });
    
}

exports.deleteCD = function (req, res) {
    var cd_name = req.body.name;
    Cd.findOne = ({ name: cd_name}, function (err,doc) {
        if(!err && !doc) {
            doc.remove();
            res.status(200).json( { message: "CD deleted"});
        } else if (!err) {
            res.status(404).json( { message: "Could not find cd"});
        } else {
            res.status(403).json( {message: "Could not delete cd"});
        }
    });
}

