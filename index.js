//
// i narsykles langa suvedus nuoroda /products pamatyti visus produktus lenteleje

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var flash = require('express-flash');
var session = require('express-session');
var mysql = require('mysql2');
var connection = require('./lib/database');

var productsRouter = require('./routes/products');
var app = express();

//Nustatome atvaizdavimo mechanizma
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    cookie: { maxAge: 60000 },
    store: new session.MemoryStore,
    saveUninitialized: true,
    resave: 'true',
    secret: 'secret'
}));

app.use(flash());
app.use('/products', productsRouter);

app.use(function (req, res, next) {
    next(createError(404));
});

app.listen(3000);