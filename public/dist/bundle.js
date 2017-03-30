'use strict';

angular.module('testApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: '../views/home.html'
  }).state('about', {
    url: '/about',
    template: '<h1> This is the about page!</h1>'
  }).state('random', {
    url: '/random',
    templateUrl: '../views/random.html'
  });
});
'use strict';

angular.module('testApp').controller('mainCtrl', function ($scope, mainService) {
    $scope.test = "Testing the mainCtrl";
});
'use strict';

angular.module('testApp').directive('mainDirective', function () {
    return {
        restrict: 'E',
        template: '<h1>This is our Main Directive</h1>'
    };
});
'use strict';

angular.module('testApp').directive('navBar', function () {
    return {
        restrict: 'E',
        templateUrl: '../../views/navbar.html'
    };
});
'use strict';

angular.module('testApp').service('mainService', function ($http) {});