var myApp = angular.module('app', []);
myApp.controller('MyController', MyController);
function MyController($scope) {
    $scope.isValid = function () {
        //console.log($scope);
        alert($scope.form.email.$valid);
    };
}
