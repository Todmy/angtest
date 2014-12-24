var myApp = angular.module('app', []);
myApp.controller('MyController', MyController);
function MyController($scope) {
    $scope.submitted = false;
    $scope.signupForm = function () {
        if ($scope.signup_form.$valid) {
            // submit as normal
        } else {
            $scope.signup_form.submitted = true;
        }
    }
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
