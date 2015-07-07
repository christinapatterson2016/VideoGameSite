(function () {
    var module = angular.module('app.wii-u', []);
// This is how you load the wii-u page
    function config($stateProvider) {
        $stateProvider
            .state('app.wii-u', {
                url: '/wii-u',
                views: {
                    'content@': {
                        templateUrl: 'app/wii-u/wii-u.html'
                    }
                }
            })
            .state('app.wii-u.overview', {
                url: '/overview',
                views: {
                    'content@': {
                        templateUrl: 'app/wii-u/wii-u-overview.html'
                    }
                }
            })
            .state('app.wii-u.games', {
                url: '/games',
                views: {
                    'content@': {
                        templateUrl: 'app/wii-u/wii-u-games.html'
                    }
                }
            })
            .state('app.wii-u.walkthroughs', {
                url: '/walkthroughs',
                views: {
                    'content@': {
                        templateUrl: 'app/wii-u/wii-u-walkthroughs.html'
                    }
                }
            })
            .state('app.wii-u.news', {
                url: '/news',
                views: {
                    'content@': {
                        templateUrl: 'app/wii-u/wii-u-news.html'
                    }
                }
            });
    }

    module.config(config);
})();
