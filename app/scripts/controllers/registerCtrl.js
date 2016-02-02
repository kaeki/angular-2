'use strict';
var user = '';
angular.module('chatApp')
	.controller('registerCtrl', function ($scope, AjaxFactory){
		$scope.registerToChat = function (){
			//Data lomakkeesta:
			var data = {
				name: $scope.user
			};	
			// kutsu register funktiota AjaxFactorysta
			var request = AjaxFactory.register(data);
			request.then(function (response){
				user = response.data;
				// 'success:' vähä niiku
				$scope.logged = true;
				console.log(response.data);
			}, function (error){
				// Virheen sattuessa
				console.log(error.data);
			});

		};
});