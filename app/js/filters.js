'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }])

  .filter('i18n', function(){
                return function(key){
                  if(locales && locales[key])
                        return locales(key);
                }
        })

  .filter('openweathermap', [function() {

  	var getWeatherResult = function(weather){
  		var canWash = false;
  		if(weather){
  			switch (weather.id){
  				case 210 :
  					canWash = true;
  					break;
  				case 212 :
  					canWash = true;
  					break;
  				case 221:
  					canWash = true;
  					break;
  				case 701:
  					canWash = true;
  					break;
  				case 711:
  					canWash = true;
  					break;
  				case 721:
  					canWash = true;
  					break;
  				case 741:
  					canWash = true;
  					break;
  				case 800:
  					canWash = true;
  					break;
  				case 801:
  					canWash = true;
  					break;
  				case 802:
  					canWash = true;
  					break;
  				case 803:
  					canWash = true;
  					break;
  				case 804:
  					canWash = true;
  					break;
  				case 904:
  					canWash = true;
  					break;	
  			}
  		}
  		return canWash;
  	}

  	var getTempResult = function(temp){
  		//TODO: Different measure units
  		var t = {};
  		t.min = temp.min;
  		t.max = temp.max;
  		return t;
  	}

  	var getImgResult = function(weather){
  		//TODO: Change to stored icons
  		return "http://openweathermap.org/img/w/" + weather.icon + ".png";
  	}

    return function(data) {
    	if(data){
    		var result = {};
    		result.cityName = data.city.name;
    		result.days = [];
    		result.upDate = new Date();

    		if(data.list && data.list.length > 0){
    			for (var i = 0; i < data.list.length; i++) {
    				var day = data.list[i];
    				var currentDay = {};
    				currentDay.canWash = getWeatherResult(day.weather[0]);
    				currentDay.temp = getTempResult(day.temp);
    				currentDay.img = getImgResult(day.weather[0]);
    				currentDay.date = new Date(day.dt*1000); 
    				result.days.push(currentDay);   				
    			};
    		}
    	}
      return result;
    }
  }]);
