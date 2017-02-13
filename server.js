var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//each of these is a different url you go to
app.get('/happy', function(req, res){
  res.end("We made it!");
});

//these next two are examples of alternate urls to go to
app.get('/sad', function(req, res){
  res.end("they're all dead")
});

app.get("/greeting/:namecanbeanything", function(req, res){
  res.send("How are you " + req.params.namecanbeanything)
});

//this requests data from the user, and then displays it
app.post('/login', function(request, response){
  var name = request.body.name;
  var password = request.body.password;
  var user = { name: name, password: password };
  response.json(user);
})

var server = app.listen(3000, function(){
  console.log('Server is LIT on PORT 3000')
});
