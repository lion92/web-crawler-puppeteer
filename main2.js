var express = require('express');
var bodyParser = require('body-parser');

const cors=require('cors');
;
var routes = require('./public/app/controllers/routes');
const todo = require('./public/app/models/todo');

var app = express();
var http=require('http').Server(app);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use(cors())


// Set Views




routes.configure(app);
//app.listen();






console.log(3000);

//pass a http.Server instance
http.listen(3000);
/*var server = app.listen(8000, function(){



  console.log('Server listening on port ' + server.address().port);
});*/
