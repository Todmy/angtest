var myApp = angular.module("app", []);
myApp.directive("superman", function(){
   return{
       restrict: "E",
       template: "<h1>I'm a man!</h1>"
   }
});