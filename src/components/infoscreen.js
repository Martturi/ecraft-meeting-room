var currentevent = ongoing_event();
var todaysEvents = list_todays_events();
export var timeProgress = 1
if (currentevent === null) {
  currentevent = {"Subject":"No currently ongoing meeting", "StartTime":"2018-00-00T00:00:00", "EndTime":"2018-00-00T00:00:00", "Organizer": "", "Participants":null};
}
else {
  timeProgress = remainingTime(currentevent)
}



function remainingTime(currentevent){
  var endHours = currentevent.EndTime.slice(11,13);
  var startHours = currentevent.StartTime.slice(11,13);
  var endMinutes = currentevent.EndTime.slice(14,16);
  var startMinutes = currentevent.StartTime.slice(14,16);
  var currentHours = currentTime.slice(11,13);
  var currentMinutes = currentTime.slice(14,16);

  var totalDuration = (endHours-startHours)*60 + (endMinutes-startMinutes);
  var timeSinceStart = (currentHours-startHours)*60 + (currentMinutes-startMinutes);

  return timeSinceStart/totalDuration;
}

export class Infoscreen {
  CurrentMeeting = currentevent.Subject;
  CurrentMeetingHost = currentevent.Organizer;
  StartTime = currentevent.StartTime.slice(11,16);
  EndTime = currentevent.EndTime.slice(11,16);
  RemainingTime = timeProgress;
  nextEvent = nextEvents();
}
