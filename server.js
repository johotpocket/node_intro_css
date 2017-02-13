var express = require('express');
var app = express();
app.get('/happy', function(req, res){
  res.end("We made it!");
});

app.get('/sad', function(req, res){
  res.end("they're all dead")
});

var server = app.listen(3000, function(){
  console.log('Server is LIT on PORT 3000')
});
