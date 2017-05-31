angular.module('limoservice')
    .controller('LoginController', function($scope, $state, $http, $window) {

    var vm = this;

    vm.usuario = {};
    vm.mensagem = '';

    vm.login  = login;
    vm.limpar = limpar;
    vm.logout = logout;
    vm.teste = teste;

    function login() {
        $http.post('/autenticar', angular.toJson(vm.usuario))
            .then(function() {
            $state.go('principal.inicial');
        }, function(error) {
            console.log(error);
            vm.usuario = {};
            vm.mensagem = 'Login ou senha inválidos.';
        });
    };

    function teste() {
        $http.get('/v1/usuarios')
            .then(function(usuarios) {
            console.log(usuarios);
        }, function(error) {
            console.log(error);
        });
    };
    
    function limpar() {
        vm.usuario.login = '';
        vm.usuario.senha = '';
        vm.loginForm.$setPristine();
        $('#login').focus();
    };

    function logout() {
        delete $window.sessionStorage.token;
        $state.go('login');
    };

});
