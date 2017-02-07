'use strict';

angular.module('jazz', ['ui.router', 'ngAnimate', 'ngTouch']).config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('premium', {
    url: "/",
    controller: 'premiumCtrl',
    templateUrl: './public/src/views/premium.html'
  });
});

angular.module('jazz').service('mainService', function ($http) {});

angular.module('jazz').controller('premiumCtrl', function ($scope, mainService) {

  // $scope.test = ' hello from ctrl';

  $(document).ready(function () {
    $('.fade').slick({
      autoplay: true,
      dots: false,
      infinite: true,
      speed: 1000,
      fade: true,
      cssEase: 'linear',
      arrows: false
    });
  });
});

angular.module('jazz').directive('navDirective', function () {
  var controller = function controller($scope, $state, mainService) {

    // menu icon animation

    $(document).ready(function () {
      $('#nav-icon3').click(function () {
        $(this).toggleClass('open');
      });
    });

    // menu dropdown animationm
    $scope.showLogin = function () {
      $scope.modalFunc = !$scope.modalFunc;
      console.log('firing');
    };
    $scope.menuShowing = false;
    $scope.toggleMenu = function () {
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      if (!$scope.menuShowing) {
        $('div.menu').addClass('animated slideInDown').one(animationEnd, function () {
          $(this).removeClass('animated slideInDown');
        });
      } else {
        $('div.menu').addClass('animated slideOutUp').one(animationEnd, function () {
          $(this).prev().find('#nav-icon3').removeClass('open');
          $(this).removeClass('animated slideOutUp');
        });
      }
      $scope.menuShowing = !$scope.menuShowing;
      // console.log($scope.menuShowing);
    };
    $scope.closeMenu = function () {
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      if ($scope.menuShowing) {
        $('div.menu').addClass('animated slideOutUp').one(animationEnd, function () {
          $(this).prev().find('#nav-icon3').removeClass('open');
          $(this).removeClass('animated slideOutUp');
        });
      }
      $scope.menuShowing = false;
    };
  };
  return {
    restrict: 'AE',
    controller: controller,
    templateUrl: './public/src/views/templates/navTmpl.html'
  };
});
//# sourceMappingURL=all.js.map
