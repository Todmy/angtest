var myApp = angular.module("app", []);
myApp.controller("AppCtrl", function($scope){
    $scope.loadMoreTweets = function(){
        alert("loading tweets");
    };

    $scope.deleteSomeTweets = function(){
        alert("deleting tweets");
    }
});
myApp.directive("enter", function(){
    return function($scope, $element, $attrs){
        $element.bind("mouseenter", function(){
            //$scope.$apply("loadMoreTweets()");
            $scope.$apply($attrs.enter);
        })
    }
});
myApp.directive("click", function(){
    return function($scope, $element, $attrs){
        $element.bind("click", function(){
            $scope.deleteSomeTweets();
        })
    }
});
