const userService = require('../services/user');

module.exports = {
    create: async (req, res) => {
        //const {name, gender, phone, email} = req.body;
        const user = await userService.create(req.body);
        res.send(user);
    },
    read: async (req, res) => {
        const user = await userService.read();
        res.send(user);
    },
    update: async (req, res) => {
        const id = req.params.id;
        const user = await userService.update(id, req.body);
        res.send(user);
    },
    delete: async (req, res) => {
        const id = req.params.id;
        const user = await userService.delete(id);
        res.send(user);
    }
};