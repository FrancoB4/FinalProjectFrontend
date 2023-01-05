import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  loginIn = false;
  loggedIn = false;
  userData: {username: string, password: string} = {} as {username: string, password: string};

  constructor() { }

  onLogin() {
    this.loginIn = !this.loginIn;
  }
  onLogout() {
    this.loggedIn = false;
    this.loginIn = false;
  }

  successLogin() {
    this.loggedIn = true;
    this.loginIn = false;
  }

  login(data: {username: string, password: string}) {
    this.userData = data;
    console.log(this.userData);
  }
}
