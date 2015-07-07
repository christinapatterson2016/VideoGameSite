(function () {
    var module = angular.module('app.ps4', []);
// This is how you load the ps4 page
    function config($stateProvider) {
        $stateProvider
            .state('app.ps4', {
                url: '/ps4',
                views: {
                    'content@': {
                        templateUrl: 'app/ps4/ps4.html'
                    }
                }
            })
            .state('app.ps4.overview', {
                url: '/overview',
                views: {
                    'content@': {
                        templateUrl: 'app/ps4/ps4-overview.html'
                    }
                }
            })
            .state('app.ps4.games', {
                url: '/games',
                views: {
                    'content@': {
                        templateUrl: 'app/ps4/ps4-games.html'
                    }
                }
            })
            .state('app.ps4.walkthroughs', {
                url: '/walkthroughs',
                views: {
                    'content@': {
                        templateUrl: 'app/ps4/ps4-walkthroughs.html'
                    }
                }
            })
            .state('app.ps4.news', {
                url: '/news',
                views: {
                    'content@': {
                        templateUrl: 'app/ps4/ps4-news.html'
                    }
                }
            });
    }

    module.config(config);
})();
