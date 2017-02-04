angular.module('jazz')
  .directive('navDirective', function() {
    var controller = function($scope, $state, mainService) {

// menu icon animation

$(document).ready(function(){
  $('#nav-icon3').click(function(){
    $(this).toggleClass('open');
  });
}); 



// menu dropdown animationm
$scope.showLogin = function () {
    $scope.modalFunc = !$scope.modalFunc;
    console.log('firing')
  }
  $scope.menuShowing = false;
  $scope.toggleMenu = function() {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    if (!$scope.menuShowing) {
        $('div.menu').addClass('animated slideInDown').one(animationEnd, function () {
          $(this).removeClass('animated slideInDown')
        });
    }
    else {
          $('div.menu').addClass('animated slideOutUp').one(animationEnd, function () {
            $(this).prev().find('#nav-icon3').removeClass('open')
            $(this).removeClass('animated slideOutUp')

        })
    }
    $scope.menuShowing = !$scope.menuShowing;
    // console.log($scope.menuShowing);
  }
  $scope.closeMenu = function() {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    if ($scope.menuShowing) {
      $('div.menu').addClass('animated slideOutUp').one(animationEnd, function () {
        $(this).prev().find('#nav-icon3').removeClass('open')
        $(this).removeClass('animated slideOutUp')

    });
    }
    $scope.menuShowing = false;
  }
};
    return {
      restrict: 'AE',
      controller: controller,
      templateUrl: '../src/views/templates/navTmpl.html'
    }


})
