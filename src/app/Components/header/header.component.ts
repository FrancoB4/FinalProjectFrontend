import {Component, OnDestroy, OnInit, Output} from '@angular/core';
import { Subscription } from "rxjs/internal/Subscription";
import {UserService} from "../../services/user.service";
import {LoggedService} from "../../services/logged.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() loggedServiceSubscription: Subscription | undefined;
  loginIn = false;
  loggedIn: boolean = false;
  userData: {username: string, password: string} = {} as {username: string, password: string};

  constructor(private userService: UserService, private loggedService: LoggedService) {}

  ngOnInit() {
    this.loggedServiceSubscription = this.loggedService.isLoggedIn().subscribe((value: boolean) => {
      this.loggedIn = value;
    });
  }

  onLogin() {
    this.loginIn = !this.loginIn;
  }
  onLogout() {
    this.loggedService.setLoggedIn(false);
    this.loginIn = false;
  }

  successLogin() {
    this.loggedService.setLoggedIn(true);
    this.loginIn = false;
  }

  login(data: {username: string, password: string}) {
    this.userData = data;
    this.userService.getUsers().subscribe((user:any) => {
      if (user[0].username === this.userData.username && user[0].password === this.userData.password) {
        this.successLogin();
      }
    });
  }

  ngOnDestroy() {
    this.loggedServiceSubscription?.unsubscribe();
  }
}
