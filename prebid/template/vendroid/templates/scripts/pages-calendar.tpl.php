<!-- Calendar -->
<script type="text/javascript" src='plugins/moment/moment.min.js'></script>
<script type="text/javascript" src='plugins/jquery-ui/jquery-ui.custom.min.js'></script>
<script type="text/javascript" src='plugins/fullcalendar/fullcalendar.min.js'></script>
<script type="text/javascript">
$(window).load(function() 
	{
	"use strict";

    function renderCalendar(){

        if (!jQuery().fullCalendar) {
            return;
        }

        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();


		var h = {
			left: 'title, prev,next',
			center: '',
			right: 'today,month,agendaWeek,agendaDay'
		};


        function initDragObject(element) {
            // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
            // it doesn't need to have a start or end
            var eventObject = {
                title: $.trim(element.text()) // use the element's text as the event title
            };
            // store the Event Object in the DOM element so we can get to it later
            element.data('eventObject', eventObject);
            // make the event draggable using jQuery UI
            element.draggable({
                zIndex: 999,
                revert: true, // will cause the event to go back to its
                revertDuration: 0 //  original position after the drag
            });
        }

        var addEvent = function (title) {
            title = title.length == 0 ? "Untitled Event" : title;
            var html = $('<div class="external-event btn vd_btn vd_bg-blue btn-xs mgr-10 mgbt-xs-10" style="" role="button">' + title + '</div>');
            jQuery('#events').append(html);
            initDragObject(html);
        }

        $('#external-events div.external-event').each(function () {
            initDragObject($(this))
        });
		

        $('#event-add').unbind('click').click(function () {
            var title = $('#event-title').val();
            addEvent(title);
        });

	  $('#event-title').keypress(function(event) {
			if (event.keyCode == 13) {
				event.preventDefault();
				$('#event-add').click();
			}
		});			

        //predefined events
        $('#events').html("");
        addEvent("Event 1");
        addEvent("Event 2");
        addEvent("Event 3");
        addEvent("Event 4");
        addEvent("Event 5");
        addEvent("Event 6");

        $('#fullcalendar').html("");
        $('#fullcalendar').fullCalendar({
            header: h,
            editable: true,
            droppable: true, // this allows things to be dropped onto the calendar !!!
            drop: function (date, allDay) { // this function is called when something is dropped

                // retrieve the dropped element's stored Event Object
                var originalEventObject = $(this).data('eventObject');
                // we need to copy it, so that multiple events don't have a reference to the same object
                var copiedEventObject = $.extend({}, originalEventObject);

                // assign it the date that was reported
                copiedEventObject.start = date;
                copiedEventObject.allDay = allDay;
                copiedEventObject.className = $(this).attr("data-class");

                // render the event on the calendar
                // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                $('#fullcalendar').fullCalendar('renderEvent', copiedEventObject, true);

                // is the "remove after drop" checkbox checked?
                if ($('#drop-remove').is(':checked')) {
                    // if so, remove the element from the "Draggable Events" list
                    $(this).remove();
                }
            },
            events: [{
                title: 'All Day Event',
                start: new Date(y, m, 1)
            }, {
                title: 'Long Event',
                start: new Date(y, m, d - 5),
                end: new Date(y, m, d - 2)
            }, {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d - 3, 16, 0),
                allDay: false
            }, {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d + 4, 16, 0),
                allDay: false
            }, {
                title: 'Meeting',
                start: new Date(y, m, d, 10, 30),
                allDay: false
            }, {
                title: 'Lunch',
                start: new Date(y, m, d, 12, 0),
                end: new Date(y, m, d, 14, 0),
                allDay: false
            }, {
                title: 'Birthday Party',
                start: new Date(y, m, d + 1, 19, 0),
                end: new Date(y, m, d + 1, 22, 30),
                allDay: false
            }, {
                title: 'Click for Google',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                url: 'http://google.com/'
            }]
        });

    }

	renderCalendar();


	  
	  

});
</script>