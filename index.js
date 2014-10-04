
var ejs = require('ejs');
var express = require('express');

var app = express();

app.set('views', __dirname + '/views');
app.engine('ejs', ejs.renderFile);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('page_start.ejs', {
    title: 'Jakob Unnebäck'
  });
});

app.listen(3750, function(){
  console.log('http://localhost:3750');
});
