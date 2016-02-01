'use strict';

angular
  .module('chatApp')
    .factory('AjaxFactory', function ($http) {
        var urlBase = 'http://users.metropolia.fi/~ilkkamtk/chatApi';
        var ajaxFunctions = {};

        ajaxFunctions.login = function (args) {
            return $http.post(urlBase+ '/login', args);
        };

        return ajaxFunctions;
  });