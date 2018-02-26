var currentTime = "2018-03-03T07:45:00";
var ongoingEvent = null;
var eventsList = null;
var current_time_in_minutes = currentTime.slice(11,13)*60 + currentTime.slice(14,16);
var time_line_location = current_time_in_minutes/(24*60) + "%";

function showParticipants() {
  let names = document.getElementById("participant-names");
  if (names.style.display === "none") {
    names.style.display = "block";
  } else{ names.style.display = "none"}
}

function selectEvent() {
  document.getElementById("calendar").style.display = "none";
  document.getElementById("event-viewer").style.display = "block";
}

function goBack(){
  document.getElementById("calendar").style.display = "block";
  document.getElementById("event-viewer").style.display = "none";
}

function populateHours(){
  console.log("starting for loop")
  for (let i = 0; i < 24; i++){
    console.log(i);
    $("#hours").append("<li>butts</li>");
      /*
      "<li>" + i + ":00</li><li>" + i + ":30</li>");
       */
  }
}

function getEvents(){
  $.getJSON("./build-front/data/meetings.json", function(events){
    for(var i = 0 ; i<events.length ; i++){
      if (events[i].StartTime < currentTime && events[i].EndTime > currentTime){
        ongoingEvent = events[i];
      }
      eventsList = events;
    }
  })
}

function create_event_buttons(eventsList){
    null
}

function ongoing_event(){
  return ongoingEvent;
}

function list_events(){
  return eventsList;
}

getEvents();
populateHours();

