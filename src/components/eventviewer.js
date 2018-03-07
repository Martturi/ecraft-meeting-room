let selectedEvent = {
  "name": "No currently ongoing meeting is available",
  "date": "3.3.2018",
  "startTime": "00:00",
  "endTime": "01:00",
  "participants": ["steve", "bob", "joe"],
  "description": "Lorem ipsum dolor sit amet blah blah blah blah lorem ipsum dolor sit amet",
};

export class Eventviewer {
  constructor() {
    this.name = selectedEvent.name;
    this.date = selectedEvent.date;
    this.startTime = selectedEvent.startTime;
    this.endTime = selectedEvent.endTime;
    this.participants = selectedEvent.participants;
    this.description = selectedEvent.description;


  }
}
