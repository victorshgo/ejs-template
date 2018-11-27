//Define uma instância para o ExpressJS
var express = require('express');
var app = express();

//Define o EJS como View Engine
app.set('view engine', 'ejs');

//Usar "render" para carregar arquivos EJS
app.get('/', function(req, res) {
    res.render('pages/index');
});

var server = app.listen(3000);

console.log('Servidor iniciado na porta %s...', server.address().port);