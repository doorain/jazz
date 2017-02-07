angular.module('jazz', ['ui.router', 'ngAnimate', 'ngTouch'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('premium', {
      url: "/" ,
      controller:  'premiumCtrl',
      templateUrl: './public/src/views/premium.html'
    })

})
