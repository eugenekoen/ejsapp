var express=require('express');
var bodyParser=require('body-parser');
var cors=require('cors');
var path=require('path');

var app=express();

app.use(bodyParser());
app.use(cors());

// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    response.render('index');
});

app.get('/about', function(request, response){
    response.render('about');
});

app.get('/contact', function(request, response){
    response.render('contact');
});

app.listen(3000, function(){
    console.log("heard on 3000");
});