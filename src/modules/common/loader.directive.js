'use strict';

module.exports = function loader() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div id="view-loader"></div>',
    link: function (scope, element) {

      scope.$on('$routeChangeStart', function() {
        element.addClass('show');
      });

      scope.$on('$routeChangeSuccess', function() {
        element.removeClass('show');
      });
    }
  }
};