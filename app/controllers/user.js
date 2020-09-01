const userService = require('../services/user');

module.exports = {
    create: async (req, res) => {
        //const {name, gender, phone, email} = req.body;
        const {result, error} = await userService.create(req.body);
        if(error)
            res.error(error);
        res.success(result);
    },
    read: async (req, res) => {
        const {result, error} = await userService.read();
        if(error)
            res.error(error);
        res.success(result);
    },
    update: async (req, res) => {
        const id = req.params.id;
        const {result, error} = await userService.update(id, req.body);
        if(error)
            res.error(error);
        res.success(result);
    },
    delete: async (req, res) => {
        const id = req.params.id;
        const {result, error} = await userService.delete(id);
        if(error)
            res.error(error);
        res.success(result);
    }
};