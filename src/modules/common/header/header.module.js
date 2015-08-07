'use strict';

module.exports = angular.module('myApp.common.header', [])

  .directive('mainHeader', [
    function() {
      return {
        restrict: 'EA',
        templateUrl: 'modules/common/header/header.html',
        replace: true,
        link: function () {

        }
      };
    }
  ]);