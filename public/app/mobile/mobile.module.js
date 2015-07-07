(function () {
    var module = angular.module('app.mobile', []);
// This is how you load the mobile page
    function config($stateProvider) {
        $stateProvider
            .state('app.mobile', {
                url: '/mobile',
                views: {
                    'content@': {
                        templateUrl: 'app/mobile/mobile.html'
                    }
                }
            })
            .state('app.mobile.overview', {
                url: '/overview',
                views: {
                    'content@': {
                        templateUrl: 'app/mobile/mobile-overview.html'
                    }
                }
            })
            .state('app.mobile.games', {
                url: '/games',
                views: {
                    'content@': {
                        templateUrl: 'app/mobile/mobile-games.html'
                    }
                }
            })
            .state('app.mobile.accessories', {
                url: '/accessories',
                views: {
                    'content@': {
                        templateUrl: 'app/mobile/mobile-accessories.html'
                    }
                }
            })
            .state('app.mobile.news', {
                url: '/news',
                views: {
                    'content@': {
                        templateUrl: 'app/mobile/mobile-news.html'
                    }
                }
            });
    }

    module.config(config);
})();
