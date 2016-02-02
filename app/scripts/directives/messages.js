'use strict';

angular
  .module('chatApp')
    .directive('messages', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/messages.html'
        };
});