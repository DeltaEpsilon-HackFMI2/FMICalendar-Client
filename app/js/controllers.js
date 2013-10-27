'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);

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
