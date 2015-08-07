'use strict';

var config = require('../../config');

angular.module('myApp', [
  'ui.router',
  'ngAnimate',
  require('./common/ngTransition.module.js').name,
  require('./common/sideMenu.module.js').name,
  
  require('./demo/home.module.js').name,
])

.constant('DEFAULT', {
  'environment' : config.env,
  'version' : config.version,
  'appName' : config.appName
})


.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
		// For any unmatched url, send to /
    	$urlRouterProvider.otherwise('/');
    	
	    $stateProvider
	    .state('app', {
	        abstract: true,
	        views: {
	        	'content': {
	        		templateUrl: 'modules/common/main.view.html',
	        	}
	        }
	     })
	    .state('app.home', {
	        url: '/',
    		templateUrl: 'modules/demo/home.view.html',
    		controller: 'HomeCtrl',
    		controllerAs: 'home'
	    })
	    .state('app.transitions', {
	        url: '/transitions',
    		templateUrl: 'modules/demo/transitions.view.html',
	    })
	    .state('app.menu', {
	        url: '/menu',
    		templateUrl: 'modules/demo/menu.view.html',
	    })
	    .state('app.modules', {
	        url: '/modules',
    		templateUrl: 'modules/demo/modules.view.html',
	    });
    }
])

.run(['$rootScope', 'sideMenuProvider',
      function($rootScope, sideMenuProvider) {
  	    $rootScope.$on('$stateChangeStart', function (ev, to, toParams, from, fromParams) {
  	    	sideMenuProvider.close();
  	    });
  	}
]);