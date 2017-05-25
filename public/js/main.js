angular.module('limoservice', ['ngAnimate', 'ngRoute', 'ngResource'])
    .config(function($routeProvider, $locationProvider, $httpProvider) {

        $httpProvider.interceptors.push('tokenInterceptor');
        $locationProvider.hashPrefix('');

        $routeProvider.when('/login', {
            templateUrl  : 'partials/login.html',
            controller   : 'LoginController',
            controllerAs : 'vm'
        });

        $routeProvider.when('/', {
            templateUrl  : 'partials/principal.html',
            controller   : 'LoginController',
            controllerAs : 'vm',
            resolve      : {
                'check'  : function($window, $location) {
                    if (!$window.sessionStorage.token) {
                        $location.path('/login');
                    }
                }
            }
        });

        $routeProvider.otherwise({redirectTo: '/login'});

    });
