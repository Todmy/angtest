var myApp = angular.module('app', []);
myApp.controller('MyController', MyController);
function MyController($scope) {
}
myApp.directive('ensureUnique', function ($http) {
    return {
        require: 'ngModel',
        link: function(scope, elem, attrs, ngModel) {
            scope.$watch(attrs.ngModel, function (n) {
                if (!n) return;
                $http({
                    method: 'POST',
                    url: '/api/check/'+attrs.ensureUnique,
                    data: {
                        fild: attrs.ensureUnique,
                        value: scope.ngModel
                    }
                }).success(function(data){
                    c.$setValidity('unique', data.isUnique);
                }).error(function(data) {
                    c.$setValidity('unique', false);
                })
            })
        }
    }
});
