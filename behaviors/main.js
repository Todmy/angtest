var myApp = angular.module("app", []);
myApp.directive("enter", function(){
    return function ($scope, element){
        element.bind("mouseenter", function(){
            console.log("I'm inside you");
        })
    }
});
myApp.directive("leave", function(){
    return function ($scope, element){
        element.bind("mouseleave", function(){
            console.log("I'm leaving on a jet plane");
        })
    }
});

myApp.directive("leave", function(){
    return function ($scope, element){
        element.bind("click", function(){
            console.log("click");
        })
    }
});