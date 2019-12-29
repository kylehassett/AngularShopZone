import { Component } from '@angular/core';

import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [UserService]
})
export class AppComponent {
  loggedIn = false;
  title = 'AngularShopZone';

  constructor(userService: UserService) {
    userService.loggedInObservable.subscribe((loggedIn) => this.loggedIn = loggedIn);
  }
}
