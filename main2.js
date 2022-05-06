var express = require('express');
var bodyParser = require('body-parser');

const cors=require('cors');

var routes = require('./public/app/controllers/routes');
const todo = require('./public/app/models/todo');

var app = express();
var http=require('http').Server(app);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/cookie', function(req, resp) {

  resp.send({ status: 0, message: "ok" });
})
app.use(cors())
app.use(express.static('public'))
app.use('/app', express.static(__dirname + 'public/app'))
app.use('/app/controllers', express.static(__dirname + 'public/app/controllers'))
app.use('public/app/models', express.static(__dirname + 'public/app/models'))


routes.configure(app);


console.log(3000);
//pass a http.Server instance
http.listen(3000);
/*var server = app.listen(8000, function(){



  console.log('Server listening on port ' + server.address().port);
});*/
