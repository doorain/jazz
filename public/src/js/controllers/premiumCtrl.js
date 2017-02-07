angular.module('jazz')
.controller('premiumCtrl', function($scope, mainService){

// $scope.test = ' hello from ctrl';

  $(document).ready(function(){
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
