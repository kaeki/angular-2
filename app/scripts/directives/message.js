'use strict';

angular
  .module('chatApp')
    .directive('message', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/message.html'
        };
});