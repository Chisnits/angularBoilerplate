angular.module('testApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../views/home.html'
    })
    .state('about', {
      url: '/about',
      template: '<h1> This is the about page!</h1>'
    })
    .state('random', {
      url: '/random',
      templateUrl: '../views/random.html'
    })
});