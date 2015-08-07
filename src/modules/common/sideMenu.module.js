'use strict';

module.exports = angular.module('myApp.common.sideMenu', [])
.directive('sideMenu', ['sideMenuProvider', function(sideMenuProvider) {
	return {
		restrict: 'A', // only activate on element attribute
		link: function(scope, element, attrs) {
			var $el = angular.element(element);
			if(attrs.sideMenu === 'close') {
				$el.on('click', function() {
					// Set correct class in enter and leave element for animate
					scope.$apply( function() {
						sideMenuProvider.close();
					});
				});
			}
			else if(attrs.sideMenu === 'toggle') {
				$el.on('click', function() {
					// Set correct class in enter and leave element for animate
					scope.$apply( function() {
						sideMenuProvider.toggle();
					});
				});
			}
			else if(attrs.sideMenu === '') {
				sideMenuProvider.setSideMenuElement(element);
			}
		}
	};
}])
.factory('sideMenuProvider', function() {
	this.setMenu = function() {
		if(this.sideMenuElement) {
			this.sideMenuElement[this.isOpen ? 'addClass' : 'removeClass']('side-menu-open');
		}
	};
	this.toggle = function() {
		this.isOpen = !this.isOpen;
		this.setMenu();
	}.bind(this);
	this.close = function() {
		this.isOpen = false;
		this.setMenu();
	}.bind(this);
	this.setSideMenuElement = function(element) {
		this.sideMenuElement = element;
	}.bind(this);
	return {
		isOpen: false,
		setSideMenuElement: this.setSideMenuElement,
		toggle: this.toggle,
		close: this.close
	};
});