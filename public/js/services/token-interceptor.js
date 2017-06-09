angular.module('panorama-limousines')
    .factory('tokenInterceptor', function($window, $q, $location) {
        var interceptor = {};

        interceptor.response = function(response) {
            var token = response.headers('x-access-token');
            if (token) {
                $window.sessionStorage.token = token;
            };
            return response;
        };

        interceptor.request = function(config) {
            config.headers = config.headers || {};
            if ($window.sessionStorage.token) {
                config.headers['x-access-token'] = $window.sessionStorage.token;
            };
            return config;
        };

        interceptor.responseError = function(rejection) {
            if (rejection && rejection.status == 401) {
                delete $window.sessionStorage.token;
                $location.path('/login');
            };
            return $q.reject(rejection);
        };

        return interceptor;
    });
