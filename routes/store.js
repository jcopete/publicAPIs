var Cd = require('../models/cd').Cd;

exports.index = function(req, res) {
Cd.find({}, function(err, docs) {
if(!err) {
res.json(200, { cds: docs });
} else {
res.json(500, { message: err });
}
});
}

