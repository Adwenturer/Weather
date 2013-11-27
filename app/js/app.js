'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', '$controllerProvider', function($routeProvider, $controllerProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1', resolve: {
            Locale: function (repoService) {
                return repoService.getItems().then(function (response) {
                    return response.data;
                });
            }});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});

}]).factory('repoService', function ($http) {
    return {
        getItems: function () {
        	    var userLang = navigator.language || navigator.userLanguage; 
                console.log("The language is: " + userLang);

                //Load localization
                loadLocaleFile();

            return $http.get("lib/Angular/i18n/" + userLang + ".js", "js");
        }
    };
});

