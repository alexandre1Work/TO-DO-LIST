//importando conexão com o banco de dados
const conection = require('./conectionDb');

//Criando as funções do banco de dados
const getAll = async() => {
    const tasks = await conection.execute('SELECT * FROM tasks');
    return tasks;
};

//para não exportar uma por um objeto, cria uma e exporta
module.exports = {
    getAll
};