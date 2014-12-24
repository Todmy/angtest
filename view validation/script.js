var myApp = angular.module('app', []);
myApp.controller('MyController', MyController);
function MyController($scope) {
}
myApp.directive('oneToTen', function () {
    return {
        require: '?ngModel',
        link: function(scope,elem, attrs, ngModel) {
            if(!ngModel) return;
                ngModel.$parsers.unshift(
                    function (viewValue) {
                        var i = parseInt (viewValue)
                        if(i >=0 && i<10){
                            ngModel.$setValidity('oneToTen', true);
                            return viewValue;
                        } else {
                            ngModel.$setValidity('oneToTen', false)
                            return undefined;
                        }
                    }
                )
        }
    }
})
