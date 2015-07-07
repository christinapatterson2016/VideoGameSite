(function () {
    var module = angular.module('app.xbox-one', []);
// This is how you load the xbox one page
    function config($stateProvider) {
        $stateProvider
            .state('app.xbox-one', {
                url: '/xbox-one',
                views: {
                    'content@': {
                        templateUrl: 'app/xbox-one/xbox-one.html'
                    }
                }
            })
            .state('app.xbox-one.overview', {
                url: '/overview',
                views: {
                    'content@': {
                        templateUrl: 'app/xbox-one/xbox-one-overview.html'
                    }
                }
            })
            .state('app.xbox-one.games', {
                url: '/games',
                views: {
                    'content@': {
                        templateUrl: 'app/xbox-one/xbox-one-games.html'
                    }
                }
            })
            .state('app.xbox-one.accessories', {
                url: '/accessories',
                views: {
                    'content@': {
                        templateUrl: 'app/xbox-one/xbox-one-accessories.html'
                    }
                }
            })
            .state('app.xbox-one.news', {
                url: '/news',
                views: {
                    'content@': {
                        templateUrl: 'app/xbox-one/xbox-one-news.html'
                    }
                }
            });
    }

    module.config(config);
})();
