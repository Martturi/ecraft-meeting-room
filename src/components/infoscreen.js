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
  timeProgress = remainingTime(currentEvent)*100 + "%";
}



function remainingTime(currentEvent){
  let endHours = parseInt(currentEvent.EndTime.slice(11,13));
  let startHours = parseInt(currentEvent.StartTime.slice(11,13));
  let endMinutes = parseInt(currentEvent.EndTime.slice(14,16));
  let startMinutes = parseInt(currentEvent.StartTime.slice(14,16));
  let currentHours = parseInt(currentTime.slice(11,13));
  let currentMinutes = parseInt(currentTime.slice(14,16));

  let totalDuration = (endHours-startHours)*60 + (endMinutes-startMinutes);
  let timeSinceStart = (currentHours-startHours)*60 + (currentMinutes-startMinutes);

  return timeSinceStart/totalDuration;
}

export class Infoscreen {
  constructor() {
    this.CurrentMeeting = currentEvent;
    this.todaysEvents = todaysEvents;
    this.upcomingEvents = upcomingEvents;
  }
  attached(){
    document.getElementById("progress").style.width = timeProgress;
  }
}
