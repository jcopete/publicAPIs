

exports.findAll = function (req, res) {
	var myjson= {  "id": 78, "category": { "id": 1,"name": "Rock" }, "name": "Age of Rock", "tags": [
    { "id": 2, "name": "Rock Compilation" }
  ], "status": "available"
};

	res.json(myjson);
};
