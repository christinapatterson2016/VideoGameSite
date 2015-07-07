(function () {
    var module = angular.module('app.home', []);

    function config($stateProvider) {
        $stateProvider
            .state('app.home', {
                url: '/',
                views: {
                    'content@': {
                        templateUrl: 'app/home/home.html'
                    }
                }
            });
    }

    module.config(config);
})();
