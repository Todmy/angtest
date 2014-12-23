var myApp = angular.module("app", []);

myApp.controller("MyControllerParse", MyClock);

function MyClock($timeout) {
    this.updateClock($timeout);
}

MyClock.prototype.updateClock = function ($timeout) {
    var self = this;
    var clock = function() {
        self.clock = new Date().getSeconds();
        return $timeout(clock, 1000);
    };

    return clock();
};
