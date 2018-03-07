export class Calendar {
  constructor(){
    this.ConferenceRoom = "Kesä Today";
    this.events = list_todays_events();
  }
  attached(){
    document.getElementById("time-line").style.top = time_line_location;
  }
}
