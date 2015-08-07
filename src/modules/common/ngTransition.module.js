'use strict';

module.exports = angular.module('ngTransition', ['ngAnimate', 'ui.router'])
.directive('transition', ['transitionProvider', function(transitionProvider) {
	return {
		restrict: 'A', // only activate on element attribute
		link: function(scope, element, attrs) {
			var $el = angular.element(element);
			$el.on('touchstart', function() {
				// Set correct class in enter and leave element for animate
				scope.$apply( function() {
					transitionProvider.setTransition(attrs.transition);
				});
			});
		}
	};
}])
.directive('uiSref', ['transitionProvider', function(transitionProvider) {
	return {
	    restrict: 'A',
	    link: function (scope, element, attrs) {
	    	if(!attrs.transition) {
		    	element.on('touchstart', function () {
		    		scope.$apply(function () {
		    			transitionProvider.setTransition(attrs.transition);
		    		});
		    	});
	    	}
	    }
    };
}])
.factory('transitionProvider', function() {
	return {
		directionList: ['top', 'bottom', 'left', 'right'],
		defaultTransition: 'push-fade',
		defaultDirection: 'left',
		currentTransition: '',
		currentDirection: '',
		getOppositeDirection: function() {
			switch(this.currentDirection) {
				case 'left':
					return 'right';
				case 'right':
					return 'left';
				case 'top':
					return 'bottom';
				case 'bottom':
					return 'top';
			}
			return false;
		},
		setTransition: function(transition) {
			transition = transition || this.defaultTransition;
			var bodyClassList = document.querySelector('body').classList;
			if(this.currentTransition) {
				bodyClassList.remove(this.currentTransition);
				bodyClassList.remove(this.currentDirection);
			}
			if(transition === 'back') {
				this.currentDirection = this.getOppositeDirection();
			}
			else {
				var transitionList = transition.split(' ');
				if(transitionList.length < 2) {
					this.currentDirection = this.defaultDirection;
				} else {
					this.currentDirection = transitionList[1];
				}				
				this.currentTransition = transitionList[0];
			}
			bodyClassList.add(this.currentTransition);
			bodyClassList.add(this.currentDirection);
		}
	};
});