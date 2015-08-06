'use strict';

var config  = require('../../package.json');
var angular = require('angular');

angular.module('myApp', [
  require('angular-animate'),
  require('angular-resource'),
  require('angular-route'),
  require('./common/common.module.js').name,
  require('./home/home.module.js').name
])

.constant('DEFAULT', {
  'version' : config.version,
  'appName' : config.name
})

.config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider

      .when('/', {
        templateUrl: 'modules/home/home.view.html',
        controller: 'HomeCtrl'
      })

      .otherwise({
        redirectTo: '/'
      })

    ;
  }
])