angular.module("app", [])
    .factory("Data", function () {
        return {message: "I'm data from service"}
    })
    .controller("FirstCtrl", function first($scope, Data) {
        $scope.data = Data
    })
    .controller("SecondCtrl", function second($scope, Data) {
        $scope.data = Data;

        $scope.revertMessage = function(mes){
            return mes.split('').reverse().join('');
        }
    });