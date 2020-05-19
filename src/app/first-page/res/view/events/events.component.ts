import { Component, OnInit } from '@angular/core';
import {StoreTestService} from '../../../../store-test.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private service: StoreTestService) { }

  getEvents() {
    return this.service.getEvents();
  }

  ngOnInit(): void {
  }

}
