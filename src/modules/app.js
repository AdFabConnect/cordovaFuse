'use strict';

var config = require('../../config');

angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'ngResource',
  require('./common/common.module.js').name,
  require('./home/home.module.js').name
])

.constant('DEFAULT', {
  'environment' : config.env,
  'version' : config.version,
  'appName' : config.appName
})

.config([
  '$routeProvider',
  '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider

      .when('/', {
        templateUrl: 'modules/home/home.view.html',
        controller: 'HomeCtrl'
      })

      .otherwise({
        redirectTo: '/'
      })
    ;

    $locationProvider.html5Mode(true);
  }
])

.run(function($rootScope) {

})