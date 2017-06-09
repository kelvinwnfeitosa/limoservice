angular.module('panorama-limousines', ['ui.router', 'ngRoute'])
    .config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

        $httpProvider.interceptors.push('tokenInterceptor');
        $locationProvider.hashPrefix('');

        $urlRouterProvider.otherwise('/');

        $stateProvider
          .state('login', {
            url          : '/login',
            templateUrl  : 'partials/login.html',
            controller   : 'LoginController',
            controllerAs : 'vm'
        }).state('principal', {
            url          : '',
            templateUrl  : 'partials/principal.html'
        }).state('principal.inicial', {
            url          : '/',
            templateUrl  : 'partials/inicial.html',
            controller   : 'LoginController',
            controllerAs : 'vm'
        }).state('principal.usuario', {
            url          : '/usuario',
            templateUrl  : 'partials/usuario.html',
            controller   : 'UsuarioController',
            controllerAs : 'vm'
        }).state('principal.usuarios', {
            url          : '/usuarios',
            templateUrl  : 'partials/usuarios.html',
            controller   : 'UsuariosController',
            controllerAs : 'vm'
        });

    })
    .run(function($transitions, $window) {
        $transitions.onSuccess({}, function(trans) {
            if (!$window.sessionStorage.token) {
                if (trans.$to().name !== 'login') {
                    return trans.router.stateService.go('login');
                };
            } else {
                if (trans.$to().name === 'login') {
                    return trans.router.stateService.go('principal.inicial');
                };
            };
        });
    });
