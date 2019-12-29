import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-product-selection',
  templateUrl: './product-selection.component.html',
  styleUrls: ['./product-selection.component.sass']
})
export class ProductSelectionComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  logOff() {
    this.userService.logOff();
  }

}
