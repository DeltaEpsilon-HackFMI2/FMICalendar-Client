$(document).ready(function() {

  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();

  $('#calendar').fullCalendar({
    eventClick: function(calEvent, jsEvent, view) {
			console.log(calEvent);
	  	$(this).css('border-color', 'red');

		}});
		$('#calendar').fullCalendar({
    header: {
        left: 'prev,next today',
    center: 'title',
    right: ''

    },
    monthNames:['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли','Август', 'Септември', 'Октомври', 							'Ноември', 'Декември'],
    monthNamesShort:['Ян', 'Февр', 'Март', 'Апр', 'Май', 'Юни', 'Юли',
    'Авг', 'Септ', 'Окт', 'Нов', 'Дек'],
    dayNames:['Неделя', 'Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък', 'Събота'],
    dayNamesShort:['Нед', 'Пон', 'Вт', 'Ср', 'Четв', 'Пк', 'Съб'],
    buttonText: {
        today:'ДНЕС'
    },
    allDayText:'събития:',
    minTime: 7,
    maxTime: 22,
    defaultView:'agendaWeek',
    editable: false,
    firstDay: 1,
    timeFormat: 'H(:mm)',
    axisFormat:'H(:mm)',
    events: [
    {
        title: 'All Day Event',
        start: new Date(y, m, 1)
    },
    {
        title: 'Long Event',
        start: new Date(y, m, d-5),
        end: new Date(y, m, d-2)
    },
    {
        id: 999,
        title: 'Repeating Event',
        start: new Date(y, m, d-3, 16, 0),
        allDay: false
    },
    {
        id: 999,
    },
    {
    		id: 123,
        title: 'Lunch',
        start: new Date(y, m, d, 12, 0),
        end: new Date(y, m, d, 14, 0),
        allDay: false
    },
    {
        title: 'Birthday Party',
        start: new Date(y, m, d+1, 19, 0),
        end: new Date(y, m, d+1, 22, 30),
        allDay: false
    },
    {
        title: 'Click for Google',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        url: 'http://google.com/'
    }
  ]
  });
});

