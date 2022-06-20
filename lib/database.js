// susijungima su mysql duomenu baze
var mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'classicmodels',
    port: 3307
});

connection.connect(function (error) {
    if (error) {
        console.log(error)
    } else {
        console.log('Prisijungimas ivyko sekmingai');
    }
});

module.exports = connection;