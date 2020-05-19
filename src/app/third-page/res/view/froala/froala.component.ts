import { Component, OnInit } from '@angular/core';
import {StoreTestService} from '../../../../store-test.service';

@Component({
  selector: 'app-froala',
  templateUrl: './froala.component.html',
  styleUrls: ['./froala.component.css']
})
export class FroalaComponent implements OnInit {

  constructor(private service: StoreTestService) { }

  getNews() {
    return this.service.getNews();
  }

  ngOnInit(): void {
  }

}
