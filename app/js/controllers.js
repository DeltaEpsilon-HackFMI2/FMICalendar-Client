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

eventControllers.controller('EventCtrl', ['$scope', 'EventInfo',
    function($scope, EventInfo) {
      /* config object */
      console.log($scope);
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

      var date = new Date();
      var d = date.getDate();
      var m = date.getMonth();
      var y = date.getFullYear();
      $scope.events = [
        {title: 'All Day Event',start: new Date(y, m, 1)},
        {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
        {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
        {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
        {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
        {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
        ];
    }]);


// eventControllers.controller('EventInfoCtrl', ['$scope', 'EventInfo',
//     function($scope, EventInfo) {
//       // $('#calendar').fullCalendar({
//       //   eventClick: function(calEvent, jsEvent, view) {
//       //     // $scope.eventMetaInfo = EventInfo.query();
//       //     console.log(calEvent);
//       //   }
//       // });
//     }]);
