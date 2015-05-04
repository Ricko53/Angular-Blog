(function(angular, undefined){
  "use strict";
  angular.module('Myapp', ['ngMaterial', 'ngRoute'])
  .config(function($mdThemingProvider, $mdIconProvider, $routeProvider, $locationProvider){
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

                  $routeProvider
                      .when('/',{
                        templateUrl: 'Blog/home.html',
                        controller: 'HomeCtrl'
                      })
                      .when('/blog',{
                        templateUrl: 'Blog/Blog.html',
                        controller: 'BlogCtrl'
                      });

  })
  .controller('AppCtrl', function($scope, $timeout, $mdSidenav, $mdComponentRegistry, $log) {

    $scope.toggle = angular.noop;
    $scope.isOpen = function() { return false };
    $scope.topmenu = true;

    $scope.menuhide = function(){
      $scope.topmenu = false;
    }

    $scope.menuhshow = function(){
      $scope.topmenu = true;
    }

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
  })
  .controller('HomeCtrl', function(){

  })
  .controller('BlogCtrl', function(){

  });
})(angular);