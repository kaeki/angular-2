'use strict';

angular.module('chatApp')
  .controller('messagesCtrl', function ($scope, AjaxFactory, $interval) {
    $scope.getMessages = function(){
        console.log('Dudiin');
        // kutsu login-funktiota AjaxFactorystä
        var request = AjaxFactory.getAllMessages();
        request.then(function(response){
            // tee vastauksella jotain
            $scope.messages = response.data;
        }, function(error){
            // tee virheellä jotain
            console.log(error.data);
        });
        };
      $interval(function(){$scope.getMessages();}, 1000);


  });
