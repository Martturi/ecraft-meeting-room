import {timeline_location} from "scripts"

export class Calendar {
  constructor(){
    this.ConferenceRoom = "Kesä Today";
    this.events = list_todays_events();
  }
  attached(){
    let timeline = document.getElementById("time-line");
    timeline.style.top = time_line_location;
  }
}
