var superApp = angular.module("app", []);

function ChoreController() {
}

ChoreController.prototype.log = function (chore) {
    alert(chore + " is done");
};

superApp.controller("ChoreController", ChoreController);



superApp.directive("kid", function(){
    return {
        restrict: "E",
        scope: {
            done: "&"
        },
        template: '<input type="text" ng-model="chore"><br>' +
        '{{chore}}<br>' +
        '<div class="button" ng-click="done({ chore: chore })">done</div>'
    }
});