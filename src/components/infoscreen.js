let currentEvent = ongoing_Event();
export var timeProgress = 1;

if (currentEvent === null) {
  currentEvent = {
    "Subject": "No currently ongoing meeting",
    "StartTime": "2018-00-00T00:00:00",
    "EndTime": "2018-00-00T00:00:00",
    "Organizer": "",
    "Participants": null
  };
}
else {
  timeProgress = remainingTime(currentEvent)
}



function remainingTime(currentEvent){
  let endHours = currentEvent.EndTime.slice(11,13);
  let startHours = currentEvent.StartTime.slice(11,13);
  let endMinutes = currentEvent.EndTime.slice(14,16);
  let startMinutes = currentEvent.StartTime.slice(14,16);
  let currentHours = currentTime.slice(11,13);
  let currentMinutes = currentTime.slice(14,16);

  let totalDuration = (endHours-startHours)*60 + (endMinutes-startMinutes);
  let timeSinceStart = (currentHours-startHours)*60 + (currentMinutes-startMinutes);

  return timeSinceStart/totalDuration;
}

export class Infoscreen {
  constructor() {
    this.CurrentMeeting = currentEvent;
    this.RemainingTime = timeProgress;
    this.todaysEvents = list_todays_events();
  }
}
