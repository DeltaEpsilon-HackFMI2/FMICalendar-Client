'use strict';

/* Services */

var schedulecatServices = angular.module('schedulecatServices', ['ngResource']);

schedulecatServices.factory('ScheduleMenu', ['$resource',
  function($resource) {
    return $resource('schedule/schedule.json', {}, {
      query: {method: 'GET', params: {}, isArray: false}
    });
  }]);

var eventService = angular.module('eventService', ['ngResource']);

eventService.factory('Event', ['$resource',
  function($resource) {
    return $resource('schedule/events.json', {}, {
      query: {method: 'GET', params: {}, isArray: true}
    });
  }]);    

var eventInfoService = angular.module('eventInfoService', ['ngResource']);

eventInfoService.factory('EventInfo', ['$resource',
  function($resource) {
    return $resource('schedule/event.json', {}, {
      query: {method: 'GET', params: {}, isArray: false}
    });
  }]);    
