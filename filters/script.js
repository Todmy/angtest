var myApp = angular.module('app', []);
myApp.controller('MyController', MyController);
function MyController() {
};
function customFilter() {
    return function (input) {
        if (input) {
            return input.split('').reverse().join('');
        }
    }
}
myApp.filter('customFilter', customFilter);