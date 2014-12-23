var watchApp = angular.module('app', []);

watchApp.controller('MyControllerParse', MyControllerParse);

function MyControllerParse($scope, $parse) {
    $scope.$watch('expr', function(newVal, oldVal, scope) {
        console.log(newVal, oldVal);
        if (newVal !== oldVal) {
            var parseFun = $parse(newVal);
            scope.parsedExpr = parseFun(scope);
        }
    });
}

watchApp.controller('MyControllerInterpolate', MyControllerInterpolate);

function MyControllerInterpolate ($scope, $interpolate) {
    $scope.to = 'ari@fullstack.io';
    $scope.emailBody = 'Hello {{ to }},\n\nMy name is Ari too!';
    $scope.$watch('emailBody', function (body) {
        if (body){
            body = $scope.to + ': ' + body;
            var template = $interpolate(body);
            $scope.previewText = template({to: $scope.to});
        }
    });
}

