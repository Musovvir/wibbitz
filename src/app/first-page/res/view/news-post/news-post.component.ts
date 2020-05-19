import { Component, OnInit } from '@angular/core';
import {StoreTestService} from '../../../../store-test.service';

@Component({
  selector: 'app-news-post',
  templateUrl: './news-post.component.html',
  styleUrls: ['./news-post.component.css']
})
export class NewsPostComponent implements OnInit {

  getSidebar() {
    return this.service.getSidebar();
  }

  constructor(private service: StoreTestService) { }

  ngOnInit(): void {
  }

}
