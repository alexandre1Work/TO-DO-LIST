const tasksModel = require('../models/tasksModel');

const getAll = async (req, res) => {
    //acessando taskModel e a função getAll dela
    const tasks = await tasksModel.getAll();
    return res.status(200).json(tasks);
};

module.exports = {
    getAll 
};