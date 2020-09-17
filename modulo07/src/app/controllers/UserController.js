const User = require('../models/User');

module.exports = {
    registerForm(request, response) {
        return response.render('users/register')
    },
    async post(request, response) {
        
    }
}