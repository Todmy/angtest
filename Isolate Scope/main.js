var superApp = angular.module("app", []);
superApp.controller("ChoreController", function($scope){
   $scope.logChore = function (chore) {
       alert(chore + " is done");
   }
});
superApp.directive("kid", function(){
    return {
        restrict: "E",
        scope: {
            done: "&"
        },
        template: '<input type="text" ng-model="chore"><br>' +
        '{{chore}}<br>' +
        '<div class="button" ng-click="done({chore: chore})">done</div>'
    }
});