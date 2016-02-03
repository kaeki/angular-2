'use strict';

angular
  .module('chatApp')
    .factory('AjaxFactory', function ($http) {
        var urlBase = 'http://users.metropolia.fi/~ilkkamtk/chatApi';
        var ajaxFunctions = {};

        ajaxFunctions.login = function (args) {
            return $http.post(urlBase+ '/login', args);
        };
        ajaxFunctions.register = function (args) {
        	return $http.post(urlBase+ '/users', args);
        };
        ajaxFunctions.message = function (args) {
        	return $http.post(urlBase+ '/messages', args);
        };
        ajaxFunctions.getAllMessages = function () {
        	return $http.get(urlBase+ '/threads');
        };

        return ajaxFunctions;
  });