var myApp = angular.module('app', []);
myApp.controller('ParentController', ParentController);
function ParentController () {
    this.person = {
        name: 'BlaBla'
    }
}
ParentController.prototype.sayName = function () {
    return 'My name is ' + this.person.name;
};
myApp.controller('ChildController', ChildController);
function ChildController () {
    ParentController.apply(this);
    console.log(this.sayName())
}
ChildController.prototype = new ParentController();

