//importanto o express 
const express = require('express'); 

// const app recebendo a instancia do express
const app = express() 

//GET - PARA LISTAS
//parametros req e res, enviando uma resposta por meio do RESPONSE com o status 200, e send a mensagem
app.get('/', (request, response) => response.status(200).send('Olá Mundo!'))

//POST - PARA CADASTRAR

//app vai ouvir (rodar) na porta 7777
app.listen(7777, () => console.log('O servidor está rodando na porta 7777')); 