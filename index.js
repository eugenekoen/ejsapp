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
    response.render('home');
});

app.get('/login', function(request, response){
    response.render('login');
});

app.get('/register', function(request, response){
    response.render('register');
});

app.get('/secrets', function(request, response){
    response.render('secrets');
});

app.listen(3000, function(){
    console.log("heard on 3000");
});