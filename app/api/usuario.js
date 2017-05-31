module.exports = function(app) {
    var mongoose = require('mongoose');

    var api = {};
    var model = mongoose.model('Usuario');

    api.listar = function(request, response) {
        model.find({})
            .then(function(usuarios) {
                response.json(usuarios);
            }, function(error) {
                console.log(error);
                response.status(500).json(error);
            });
    };

    api.cadastrar = function(request, response) {
        console.log(request.body);
        model.create(request.body)
            .then(function(usuario) {
                response.json(usuario);
            }, function(erro) {
                if (erro.code == 11000) {
                    response.status(500).json({
                        erro : erro,
                        mensagem : 'Nome de usuário já existente.'
                    });
                } else {
                    response.status(500).json(erro);
                };
                console.log(erro);
            });
    };

    return api;
};
