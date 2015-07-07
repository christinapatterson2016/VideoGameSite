(function () {
    var module = angular.module('app.pc', []);
// This is how you load the pc page
    function config($stateProvider) {
        $stateProvider
            .state('app.pc', {
                url: '/pc',
                views: {
                    'content@': {
                        templateUrl: 'app/pc/pc.html'
                    }
                }
            })
            .state('app.pc.overview', {
                url: '/overview',
                views: {
                    'content@': {
                        templateUrl: 'app/pc/pc-overview.html'
                    }
                }
            })
            .state('app.pc.games', {
                url: '/games',
                views: {
                    'content@': {
                        templateUrl: 'app/pc/pc-games.html'
                    }
                }
            })
            .state('app.pc.walkthroughs', {
                url: '/walkthroughs',
                views: {
                    'content@': {
                        templateUrl: 'app/pc/pc-walkthroughs.html'
                    }
                }
            })
            .state('app.pc.news', {
                url: '/news',
                views: {
                    'content@': {
                        templateUrl: 'app/pc/pc-news.html'
                    }
                }
            });
    }

    module.config(config);
})();
