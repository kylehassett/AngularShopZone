import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Subscriptions
  private loggedInSubject = new Subject<boolean>();
  loggedInObservable = this.loggedInSubject.asObservable();

  email: string;
  loggedIn = false;
  password: string;

  constructor() { }

  login(email: string, password: string): void {
    this.email = email;
    this.password = password;
    this.loggedIn = true;
    this.loggedInSubject.next(true);
  }

  logOff(): void {
    this.loggedIn = false;
    this.email = '';
    this.password = '';
    this.loggedInSubject.next(false);
  }
}
