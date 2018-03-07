let selectedEvent = eventsList[0];
export class Eventviewer {
  constructor() {
    this.event = selectedEvent;
    this.date = selectedEvent.StartTime.slice(8,10) + "." + selectedEvent.StartTime.slice(5, 7) + "." + selectedEvent.StartTime.slice(0,4);
    this.participants = selectedEvent.Participants
  };
}
