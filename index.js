var express = require('express')
    cds = require('./routes/cds');

var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.get ('/cd', cds.findAll );

//app.put ('/cd', cds.updateCD );
//app.post ('/cd', cds.storeCD );
//app.get ('/cd:id', cds.findById );

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
