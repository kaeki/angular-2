'use strict';

angular
  .module('chatApp')
    .directive('login', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/login.html'
        };
});