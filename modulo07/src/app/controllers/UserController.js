const User = require('../models/User');

module.exports = {
    registerForm(request, response) {
        return response.render('users/register')
    },
    show(request, response) {
        return response.send('Ok cadastrado')
    },
    async post(request, response) {
        const userId = await User.create(request.body)

        request.session.userId = userId

        return response.redirect('/users')
    }
}