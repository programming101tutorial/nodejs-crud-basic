const authController = require('../controllers/auth');

module.exports = (route) => {
    route.post('/login', authController.login);
    route.post('/register', authController.register);
};