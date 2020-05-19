import {Component, Input, OnInit} from '@angular/core';
import {StoreTestService} from '../../../../../../../store-test.service';

@Component({
  selector: 'app-item-popular',
  templateUrl: './item-popular.component.html',
  styleUrls: ['./item-popular.component.css']
})
export class ItemPopularComponent implements OnInit {

  @Input() image: string;
  @Input() title: string;
  @Input() text: string;
  @Input() read: string;

  constructor(private service: StoreTestService) { }

  ngOnInit(): void {
  }

}
