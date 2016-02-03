'use strict';

angular.module('chatApp')
	.controller('messageCtrl', function ($scope, AjaxFactory){
		$scope.sendMessage =function (){
			var data = {
				uID: $scope.user.uID,
				message: $scope.message
			};
			var request = AjaxFactory.message(data);
			request.then(function (response){
				console.log(response.data);
			}, function (error){
				console.log(error.data);
			});
		};
});