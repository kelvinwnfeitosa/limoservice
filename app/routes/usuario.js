module.exports = function(app) {
    var api = app.api.usuario;

//    app.route('/v1/usuarios/:id')
//        .get(api.recuperar)
//        .delete(api.excluir)
//        .put(api.alterar);

    app.route('/v1/usuarios')
        .get(api.listar)
        .post(api.cadastrar);

};
