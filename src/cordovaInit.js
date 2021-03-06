'use strict';

var CordovaInit = function() {

  var onDeviceReady = function() {
    receivedEvent('deviceready');
  };

  var receivedEvent = function() {
    angular.bootstrap(document.documentElement, ['myApp']);
  };

  this.bindEvents = function() {
    document.addEventListener('deviceready', onDeviceReady, false);
  };

  //If cordova is present, wait for it to initialize, otherwise just try to
  //bootstrap the application.
  if (window.cordova !== undefined) {
    console.log('Cordova found, wating for device.');
    this.bindEvents();
  } else {
    console.log('Cordova not found, booting application');
    receivedEvent('manual');
  }
};

(function() {
  new CordovaInit();
})();