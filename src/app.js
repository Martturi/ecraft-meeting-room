import {inject} from 'aurelia-framework'
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class App {
  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
    this.currentmeeting = "no current meeting";
  }
}
