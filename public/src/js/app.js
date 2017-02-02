angular.module('jazz', ['ui.router', 'ngAnimate', 'ngTouch'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('premium', {
      url: "/" ,
      controller:  'premiumCtrl',
      templateUrl: '../src/views/premium.html'
    })

})
