'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['myApp.filters']).
  value('version', '0.1')
  .factory('Weather', function($http, $q, $filter) {

  	return {
            getWeather: function(lat, lon){
            	var deferred = $q.defer();
            	var openFilter = $filter('openweathermap');

            	$http.jsonp('http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + parseInt(lat) + '&lon=' + parseInt(lon) + '&cnt=10&mode=json&callback=JSON_CALLBACK')
                .success(function(data, status, headers, config) {
                            deferred.resolve(openFilter(data));                                      
                      }).
                error(function(data, status, headers, config) {
                        	deferred.reject(null);  
                      });                

            	return deferred.promise;
            }
        }
  })
  .factory('Date', function($http, $q, $filter) {

    return {
            getWeather: function(lat, lon){
              var deferred = $q.defer();
              var openFilter = $filter('openweathermap');

              $http.jsonp('http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + parseInt(lat) + '&lon=' + parseInt(lon) + '&cnt=10&mode=json&callback=JSON_CALLBACK')
                .success(function(data, status, headers, config) {
                            deferred.resolve(openFilter(data));                                      
                      }).
                error(function(data, status, headers, config) {
                          deferred.reject(null);  
                      });                

              return deferred.promise;
            }
        }
  });
