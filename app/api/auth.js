module.exports = function(app) {
    var mongoose = require('mongoose');
    var jwt = require('jsonwebtoken');

    var api = {};
    var model = mongoose.model('Usuario');

    api.autentica = function(request, response) {
        model
            .findOne({login : request.body.login, senha: request.body.senha})
            .then(function(usuario) {
                if (!usuario) {
                    console.log('Login e senha inválidos.');
                    response.sendStatus(401);
                } else {
                    var token = jwt.sign({login: usuario.login}, app.get('secret'), {
                        expiresIn : 84600
                    });
                    console.log('Token criado e sendo enviado no header de resposta.');
                    response.set('x-access-token', token);
                    response.end();
                };
            }, function(error) {
                console.log('Login e senha inválidos.');
                response.sendStatus(401);
            });
    };

    api.verificaToken = function(request, response, next) {
        var token = request.headers['x-access-token'];
        if (token) {
            console.log('Verificando Token...');
            jwt.verify(token, app.get('secret'), function(error, decoded) {
                if (error) {
                    console.log('Token rejeitado.');
                    response.sendStatus(401);
                } else {
                    request.usuario = decoded;
                    next();
                };
            });
        } else {
            response.sendStatus(401);
        };
    };

    return api;
};
