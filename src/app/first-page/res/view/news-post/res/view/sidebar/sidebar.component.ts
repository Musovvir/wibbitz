import {Component, Input, OnInit} from '@angular/core';
import {StoreTestService} from '../../../../../../../store-test.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() image: string;
  @Input() title: string;
  @Input() text: string;
  @Input() read: string;

  constructor(private service: StoreTestService) { }

  getSidebar() {
    return this.service.getSidebar();
  }

  ngOnInit(): void {
  }

}
