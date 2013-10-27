'use strict';

/* Controllers */

var schedulecatControllers = angular.module('schedulecatControllers', []);

schedulecatControllers.controller('ScheduleMenuCtrl', ['$scope', 'ScheduleMenu',
    function($scope, ScheduleMenu) {
      var root_elem = 'Разписание';
      $scope.menu = ScheduleMenu.query(function() {
        $scope.root = $scope.menu[root_elem];
        $scope.history = [root_elem];
      });
      $scope.setRootLevel = function(rootUri) {
        var index_of_uri = $scope.history.indexOf(rootUri);
        if(index_of_uri == $scope.history.length - 1) {
          return;
        } else if(index_of_uri != -1) {
          var new_root = $scope.menu;
          var new_history = [];
          for(var i = 0; i <= index_of_uri; i++) {
            new_root = new_root[$scope.history[i]];
            new_history.push($scope.history[i]);      
          }
          $scope.root = new_root;
          $scope.history = new_history
        } else if(rootUri in $scope.root) { 
          $scope.history.push(rootUri);
          $scope.root = $scope.root[rootUri];
        } else {
          $scope.root = $scope.menu[rootUri];
          $scope.history = [root_elem, rootUri];
        }
      };
    }]);

var eventControllers = angular.module('eventControllers', []);

eventControllers.controller('EventInfoCtrl', ['$scope', 'EventInfo',
    function($scope, EventInfo) {
      $scope.eventMetaInfo = EventInfo.query();
    }]);
