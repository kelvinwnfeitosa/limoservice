angular.module('limoservice')
    .controller('UsuariosController', function($http) {

    var vm = this;

    vm.usuario = {};

    vm.iniciar = iniciar;
    vm.limpar = limpar;
    vm.cadastrar = cadastrar;

    function iniciar() {
        vm.usuario.login = '';
        vm.usuario.senha = '';
        vm.usuario.admin = false;
        $('#login').focus();
    };

    function limpar() {
        iniciar();
        vm.loginForm.$setPristine();
    };

    function cadastrar() {
        $http.post('/v1/usuarios', angular.toJson(vm.usuario))
            .then(function(usuario) {
            console.log(usuario);
        }, function(error) {
            console.log(error);
        });
    };

});
