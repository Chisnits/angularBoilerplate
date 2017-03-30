angular.module('testApp').directive('mainDirective', function() {
    return {
        restrict: 'E',
        template: '<h1>This is our Main Directive</h1>'
    }
});