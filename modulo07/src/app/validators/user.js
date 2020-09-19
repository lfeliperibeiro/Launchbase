const User = require('../models/User');

async function post(request, response, next){
    const keys = Object.keys(request.body);

        for(key of keys){
            if(request.body[key] == '') {
                return response.render('users/register', {
                    user: request.body,
                    error: 'Por favor, preencha todos os campos'
                })
            }
        }

        let {email, cpf_cnpj, password, passwordRepeat} = request.body;

        cpf_cnpj = cpf_cnpj.replace(/\D/g, "")
        
        const user = await User.findOne({
            where: { email},
            or: {cpf_cnpj}
        })
        if(user) return response.render('users/register', {
            user: request.body,
            error: 'Usuario já cadastrado.'
        })

        if(password != passwordRepeat)
        return response.render('users/register', {
            user: request.body,
            error: 'senhas não conferem'
        })

        next()
}

module.exports = {
    post 
}