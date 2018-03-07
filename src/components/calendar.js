export class Calendar {
  constructor(){
    this.ConferenceRoom = "Kesä Today";
    this.events = todaysEvents;
  }
  attached(){
    document.getElementById("time-line").style.top = time_line_location;
  }
}
