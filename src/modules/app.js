'use strict';

var config = require('../../package.json');

angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'ngResource',
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