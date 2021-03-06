'use strict';

/* Controllers */

var schedulecatControllers = angular.module('schedulecatControllers', []);

schedulecatControllers.controller('ScheduleCtrl', ['$scope', 'ScheduleMenu','Event',
    function($scope, ScheduleMenu, Event) {
      var root_elem = 'Home';
      
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
          if(Object.keys($scope.root[rootUri]).length == 0) {
            $scope.loadEvents();
          } else {
            $scope.history.push(rootUri);
            $scope.root = $scope.root[rootUri];
          }
        } else {
          $scope.root = $scope.menu[rootUri];
          $scope.history = [root_elem, rootUri];
        }
      };
      
      $scope.loadEvents = function() {
        var events = Event.query(function() {
          $scope.events.length = 0;
          for(var i = 0; i < events.length; i++) {
            $scope.events.push(events[i]);
          } 
        });
      }; 

      /* config object */
      $scope.uiConfig = {
        calendar:{
          header:{
            left: 'prev,next today',
            center: 'title',
            right: ''
          },
          monthNames:['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли','Август', 'Септември', 'Октомври','Ноември', 'Декември'],
          monthNamesShort:['Ян', 'Февр', 'Март', 'Апр', 'Май', 'Юни', 'Юли', 'Авг', 'Септ', 'Окт', 'Нов', 'Дек'],
          dayNames:['Неделя', 'Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък', 'Събота'],
          dayNamesShort:['Нед', 'Пон', 'Вт', 'Ср', 'Четв', 'Пк', 'Съб'],
          buttonText: {today:'ДНЕС'},
          allDayText:'събития:',
          minTime: 7,
          maxTime: 22,
          defaultView:'agendaWeek',
          editable: false,
          firstDay: 1,
          timeFormat: 'H(:mm)',
          axisFormat:'H(:mm)'
        }
      };

      $scope.events = [];
      $scope.eventSources = [$scope.events];
    }]);
