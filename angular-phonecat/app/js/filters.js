'use strict';

/* Filters */

angular.module('phonecatFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});

angular.module('phonecatFilters').filter('notAvail', function() {
  return function(input) {
  	if(input == ""){
  		return "Not available";
  	} else {
  		return input;
  	}
  };
});

