angular.module("app", [])
    .factory("Data", function () {
        return {message: "I'm data from service"}
    })
    .filter("reverse", function(){
        return function(text){
            return text.split("").reverse().join("");
        }
    })
    .controller("FirstCtrl", function first($scope, Data) {
        $scope.data = Data
    })
    .controller("SecondCtrl", function second($scope, Data) {
        $scope.data = Data;

        //better way to use filter for aims like this
        //$scope.revertMessage = function(mes){
        //    return mes.split('').reverse().join('');
        //}
    });