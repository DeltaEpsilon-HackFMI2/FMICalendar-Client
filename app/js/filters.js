'use strict';

/* Filters */

angular.module('phonecatFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});

angular.module('utils', [])
.factory('utils', function(){
  return{
    compareStr: function(stra, strb){
      stra = ("" + stra).toLowerCase();
      strb = ("" + strb).toLowerCase();
      return stra.indexOf(strb) !== -1;
    }
  };
});

angular.module('scheduleFilters', ['utils']).filter('keyfilter', 
  function(utils){
    return function(input, query) {
      if(!query) 
        return input;
      var result = {};
      var keys = Object.keys(input);
      angular.forEach(keys, function(item) {
        if(utils.compareStr(item, query))
          result[item] = input[item];      
      });
      return result;
    };
  });
 
