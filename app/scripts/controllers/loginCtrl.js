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
            $scope.user = response.data;
            console.log(response.data);
            $scope.logged = true;
        }, function(error){
            // tee virheellä jotain
            console.log(error.data);
        });
    };
        $scope.registerToChat = function (){
            //Data lomakkeesta:
            var data = {
                name: $scope.user
            };  
            // kutsu register funktiota AjaxFactorysta
            var request = AjaxFactory.register(data);
            request.then(function (response){
                $scope.user = response.data;
                // 'success:' vähä niiku
                $scope.logged = true;
                console.log(response.data);
            }, function (error){
                // Virheen sattuessa
                console.log(error.data);
            });

        };
  });
