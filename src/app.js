import {inject} from 'aurelia-framework'
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class App {
  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
    this.time = "2018-03-03T07:45:00";
    this.currentmeeting = "no current meeting";
  }
}
