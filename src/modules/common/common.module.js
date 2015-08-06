'use strict';

module.exports = angular.module('myApp.common', [
    require('./header/header.module.js').name,
    require('./menu/menu.module.js').name
  ])

  .directive('loader', require('./loader.directive.js'));