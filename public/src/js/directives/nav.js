angular.module('jazz')
  .directive('navDirective', function() {
    var controller = function($scope, $state, mainService) {
}
    return {
      restrict: 'AE',
      controller: controller,
      templateUrl: '../src/views/template/navTmpl.html'
    }


})
