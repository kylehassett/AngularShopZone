import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  constructor(private userService: UserService) {}

  ngOnInit() {
  }

  login(email: string, password: string) {
    this.userService.login('email', 'password');
  }

}
