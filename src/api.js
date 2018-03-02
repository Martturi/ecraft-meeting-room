var currentTime = "2018-03-03T07:45:00";
var ongoingEvent = null;
var todaysEvents = [];
var eventsList = null;
var current_time_in_minutes = currentTime.slice(11,13)*60 + currentTime.slice(14,16);
var time_line_location = current_time_in_minutes/(24*60) + "%";

function showParticipants() {
  let names = document.getElementById("participant-names");
  if (names.style.display === "none") {
    names.style.display = "inline-block";
  } else{ names.style.display = "none"}
}

function nextEvents() {
  for (var i = 0; i < 3 || i < todaysEvents.length; i++) {
    let nextEvents = document.getElementById("upcoming-events");
    let eventInfo = todaysEvents[i];
    /*nextEvents.append.innerHTML("<span>" + eventInfo.startTime + "-" + eventInfo.endTime + "<div></div>" + eventInfo.Subject + "<div></div>" + eventInfo.Organizer + "<div></div>");
*/
  }
}

function selectEvent() {
  document.getElementById("calendar").style.display = "none";
  document.getElementById("event-viewer").style.display = "block";
}

function goBack(){
  document.getElementById("calendar").style.display = "block";
  document.getElementById("event-viewer").style.display = "none";
}

function getEvents(){
  $.getJSON("./build-front/data/meetings.json", function(events){
    for(var i = 0 ; i<events.length ; i++){
      if (events[i].StartTime < currentTime && events[i].EndTime > currentTime){
        ongoingEvent = events[i];
      }
      if (events[i].StartTime > currentTime && events[i].StartTime.slice(0,10) === currentTime.slice(0,10)){
        todaysEvents.push(events[i])
        console.log(todaysEvents)
      }
    }
    eventsList = events;
  })
}

function create_event_buttons(eventsList){
    null
}

function ongoing_event(){
  return ongoingEvent;
}

function list_todays_events(){
  return todaysEvents;
}

getEvents();

