$(document).ready(function() {
    $('#calendar').fullCalendar({
        googleCalendarApiKey: ' AIzaSyBu-uECgdbLTOqh8OExNkoNjUv_uW3maG4 ',
        events: {
            googleCalendarId: 'oastem.org_cmhe83nnmo1qtn68g1pc5q7pqk@group.calendar.google.com',
            className: 'gcal-event'
        },
        titleFormat: '[STEM Calendar:] MMMM YYYY'
    });
});