import { Component, OnInit } from '@angular/core';
import {StoreTestService} from '../../../store-test.service';

@Component({
  selector: 'app-new-blog-posts',
  templateUrl: './new-blog-posts.component.html',
  styleUrls: ['./new-blog-posts.component.css']
})
export class NewBlogPostsComponent implements OnInit {

  constructor(private service: StoreTestService) { }

  getNewBlogPosts() {
    return this.service.forNewBlogPosts;
  }

  ngOnInit(): void {
  }

}
