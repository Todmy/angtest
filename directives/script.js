var myApp = angular.module('app', []);
myApp.controller('MyController', MyController);
function MyController($scope) {
    $scope.some = 'Click me to go to Google';
}
function Super() {
    return {
        restrict: 'EA',
        template: '<a href="{{myUrl}}">{{myLinkText}} </a>',
        replace: true,
        scope: {
            myUrl: '@myUrl',
            myLinkText: '='
        }
    }
}
myApp.directive('super', Super);