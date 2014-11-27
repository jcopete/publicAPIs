var express = require('express')
  , bodyParser  = require("body-parser")
  , cds = require('./routes/cds')
  , store = require ('./routes/store')
  , mongoose = require ('mongoose');

var app = express();
//mongodb://meetupUser:meetupPwd@ds055980.mongolab.com:55980/cdstore
mongoose.connect('mongodb://meetupUser:meetupPwd@ds055980.mongolab.com:55980/cdstore');

app.set('port', (process.env.PORT || 5000))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.get ('/cd', cds.findAll );
app.get ('/cds', cds.findAll );

app.get ('/store', store.findAll );
app.post ('/store', store.saveCD );
app.delete ('/store', store.deleteCD );
//app.put ('/cd', cds.updateCD );
//app.post ('/cd', cds.storeCD );
//app.get ('/cd:id', cds.findById );

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
