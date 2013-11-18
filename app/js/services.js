'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1')
  .factory('Weather', function($http, $q) {
  	return {
            getWeather: function(lat, lon){
            	var deferred = $q.defer();

            	$http({method: 'GET', url: 'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139'})
                .success(function(data, status, headers, config) {
                        deferred.resolve(data);                                          
                      }).
                error(function(data, status, headers, config) {
                        deferred.resolve(null);  
                      });

            	return deferred.promise;
            }
        }
  });
