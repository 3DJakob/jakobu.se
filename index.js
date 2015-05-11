var ejs = require('ejs');
var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.engine('ejs', ejs.renderFile);

app.use('/js', express.static('assets/js'));
app.use('/css', express.static('assets/css'));
app.use('/img', express.static('assets/img'));

app.get('/', function (req, res) {
  res.render('page_home.ejs', {
    page: 'home'
  });
});


app.get('/explore', function (req, res) {
  res.render('page_explore.ejs', {
    page: 'explore'
  });
});

app.get('/me', function (req, res) {
  res.render('page_me.ejs', {
    page: 'me'
  });
});

app.listen(3000, function () {
  console.log('http://localhost:3000');
});
