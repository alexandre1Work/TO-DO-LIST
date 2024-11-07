//importanto o express 
const express = require('express');
//importando o arquivo de rotas
const router = require('./router');

// const app recebendo a instancia do express
const app = express();
//para conseguir usar arquivor json
app.use(express.json());

//sempre vai usar as rotas
app.use(router);

//exportando o app para usar em outro arquivo
module.exports = app;