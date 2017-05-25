angular.module('limoservice')
    .controller('LoginController', function($scope, $http, $location, $window) {

    var vm = this;

    vm.usuario = {};
    vm.mensagem = '';

    vm.login  = login;
    vm.limpar = limpar;
    vm.logout = logout;

    function login() {
        $http.post('/autenticar', angular.toJson(vm.usuario))
            .then(function() {
            $location.path('/');
        }, function(error) {
            console.log(error);
            vm.usuario = {};
            vm.mensagem = 'Login ou senha inválidos.';
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
        $location.path('/login');
    };

});
