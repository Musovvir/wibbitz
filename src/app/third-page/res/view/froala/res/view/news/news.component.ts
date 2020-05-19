import {Component, Input, OnInit} from '@angular/core';
import {StoreTestService} from '../../../../../../../store-test.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input() image: string;
  @Input() title: string;
  @Input() text: string;
  @Input() name: string;
  @Input() date: string;

  constructor(private  service: StoreTestService) { }

  ngOnInit(): void {
  }

}
