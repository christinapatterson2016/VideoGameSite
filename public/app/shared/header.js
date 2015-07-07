(function(module) {

    function HeaderCtrl($scope, $location) {
        var vm = this;

        vm.state = 4;

        vm.setState = function(index) {
            vm.state = index;
        };

        vm.glyphs = [
            "ion-playstation",
            "ion-xbox",
            "ion-ios-game-controller-a",
            "ion-monitor"
        ];

        vm.consoles = [
            "ps4",
            "xbox-one",
            "wii-u",
            "pc"

        ];

        vm.isActive = function(viewLocation) {
            return viewLocation === $location.path();
        };
    }

    module.controller('HeaderCtrl', HeaderCtrl);
})(angular.module('app'));
