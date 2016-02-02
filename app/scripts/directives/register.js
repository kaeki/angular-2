'use strict';

angular
	.module('chatApp')
		.directive('register', function (){
			return{
				restrict: 'E',
				templateUrl: 'views/register.html'
			};
		});