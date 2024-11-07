const validateBody = (req, res, next) => {
    // OU const body = req.body;
    const { body } = req;

    if (body.title === undefined) {
        return res.status(400).json({ message: 'O campo "título" é obrigatório '})
    }

    if (body.title === '') {
        return res.status(400).json({ message: 'O campo "título" não pode ser vazio '})
    }

    next();
};

module.exports = {
    validateBody,
}