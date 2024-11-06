const express = require('express');
const tasksController = require('./controllers/tasksController'); //funções
const router = express.Router();
/*
GET - PARA LISTAR
POST - PARA CADASTRAR
PADRÃO -> router.get('', () => {
validar, chamar outras func, retorno de func, responder
Então é ideal que crie um arquivo para guardar essas funções (controllers)
})
*/

router.get('/tasks', tasksController.getAll);

module.exports = router;