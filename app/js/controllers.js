'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services']).
  controller('MyCtrl1', ['$scope', 'Weather', function($scope, Weather) {
  	$scope.getLocation = function(){
  		alert("!");

  		if (navigator.geolocation)
		    {
		    navigator.geolocation.getCurrentPosition($scope.showPosition);
		    }
  	}

  	$scope.showPosition = function(position)
	{
		$scope.Lat = position.coords.latitude;
		$scope.Lon = position.coords.longitude;  
		Weather.getWeather($scope.Lat, $scope.Lon).then(
			function(data){
				alert("something getted");
		},	function(error){
			alert("Error happened!");
		});
	}



  }])
  .controller('MyCtrl2', [function() {

  }]);