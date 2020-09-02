const Auth = require('../middlewares/auth');
module.exports = {
    login: (req, res) => {
        const token = Auth.generateAccessToken(req.body);
        res.json({token});
    },
    register: (req, res) => {

    }
};
