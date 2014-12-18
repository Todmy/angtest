var myApp = angular.module("app", []);
myApp.directive("superman", function(){
   return{
       restrict: "E",
       template: "<h1>I'm a strong man!</h1>"
   }
});

myApp.directive("flash", function(){
    return{
        restrict: "A",
        link: function(){
            alert("I'm a fast man!");
        }
    }
});