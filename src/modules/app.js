'use strict';

var config = require('../../config');

angular.module('myApp', [
    'ui.router'
  , 'ngResource'
  , require('./common/common.module.js').name
  , require('./home/home.module.js').name
])

.constant('DEFAULT', {
    'environment' : config.env
  , 'version' : config.version
  , 'appName' : config.appName
})

.config([
    '$stateProvider'
  , '$urlRouterProvider'
  , function($stateProvider, $urlRouterProvider) {
      $stateProvider

        .state('home', {
            url: '/home'
          , templateUrl: '/modules/home/home.view.html'
          , controller: 'HomeCtrl'
        })
        
      ;
      $urlRouterProvider.otherwise('home');
    }
])