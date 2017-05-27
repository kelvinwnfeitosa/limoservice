module.exports = function(app) {
    var mongoose = require('mongoose');

    var api = {};
    var model = mongoose.model('Usuario');

    api.listar = function(request, response) {
        model
            .find({})
            .then(function(usuarios) {
                response.json(usuarios);
            }, function(error) {
                console.log(error);
                response.Status(500).json(error);
            });
    };

    return api;
};
