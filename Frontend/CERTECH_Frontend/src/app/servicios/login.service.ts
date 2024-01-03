import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn = false;

  setLoggedIn(value: boolean) {
    this.loggedIn = value;
  }

  get isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
