(function(angular, undefined){
  "use strict";
  angular.module('Myapp', ['ngMaterial'])
  .config(function($mdThemingProvider, $mdIconProvider){

                  $mdIconProvider
                      .defaultIconSet("./img/icons/avatars.svg", 128)
                      .icon("menu"       , "./img/icons/menu.svg"        , 24)
                      .icon("share"      , "./img/icons/share.svg"       , 24)
                      .icon("google_plus", "./img/icons/google_plus.svg" , 512)
                      .icon("hangouts"   , "./img/icons/hangouts.svg"    , 512)
                      .icon("twitter"    , "./img/icons/twitter.svg"     , 512)
                      .icon("phone"      , "./img/icons/phone.svg"       , 512);

                      $mdThemingProvider.theme('default')
                          .primaryPalette('teal',{
                            'default': '600',
                            'hue-1':   '400',
                          })
                          .accentPalette('red');

  })
  .controller('AppCtrl', function($scope, $timeout, $mdSidenav, $mdComponentRegistry, $log) {

    $scope.toggle = angular.noop;
    $scope.isOpen = function() { return false };

    $mdComponentRegistry
      .when('right')
      .then( function(sideNav){

        $scope.isOpen = angular.bind( sideNav, sideNav.isOpen );
        $scope.toggle = angular.bind( sideNav, sideNav.toggle );

      });

    $scope.toggleRight = function() {
      $mdSidenav('right').toggle()
                          .then(function(){
                            $log.debug("toggle RIGHT is done");
                          });
    };
  })
  .controller('RightCtrl', function($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function() {
      $mdSidenav('right').close()
                          .then(function(){
                            $log.debug("close RIGHT is done");
                          });
    };
  });
  
})(angular);