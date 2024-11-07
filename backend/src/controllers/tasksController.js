const tasksModel = require('../models/tasksModel');

const getAll = async (_req, res) => {
    //acessando taskModel e a função getAll dela
    const tasks = await tasksModel.getAll();
    return res.status(200).json(tasks);
};

const createTask = async (req, res) => {
    const createTask = await tasksModel.createTask(req.body);

    return res.status(201).json(createTask);
}

module.exports = {
    getAll,
    createTask 
};
