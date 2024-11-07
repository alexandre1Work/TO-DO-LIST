const { request } = require('express');
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

const deleteTask = async (req, res) => {
    // OU const id = request.params.id;
    const { id } = req.params;

    await tasksModel.deleteTask(id);
    return res.status(204).json();
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
};
