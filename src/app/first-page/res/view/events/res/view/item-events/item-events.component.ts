import {Component, Input, OnInit} from '@angular/core';
import {StoreTestService} from '../../../../../../../store-test.service';

@Component({
  selector: 'app-item-events',
  templateUrl: './item-events.component.html',
  styleUrls: ['./item-events.component.css']
})
export class ItemEventsComponent implements OnInit {

  @Input() image: string;
  @Input() title: string;
  @Input() text: string;
  @Input() read: string;

  constructor(private service: StoreTestService) { }

  ngOnInit(): void {
  }

}
