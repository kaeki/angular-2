'use strict';

angular.module('chatApp')
  .controller('LoginCtrl', function ($scope, AjaxFactory) {
    $scope.logToChat = function(){
        // data lomakkeesta
        var data = {
            name: $scope.user
        };
        // kutsu login-funktiota AjaxFactorystä
        var request = AjaxFactory.login(data);
        request.then(function(response){
            // tee vastauksella jotain
            user = response.data;
            console.log(response.data);
            $scope.logged = true;
        }, function(error){
            // tee virheellä jotain
            console.log(error.data);
        });
    };
  });
