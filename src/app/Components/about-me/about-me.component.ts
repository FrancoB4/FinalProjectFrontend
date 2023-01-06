import {Component, OnDestroy} from '@angular/core';
import { Input } from "@angular/core";
import {Subscription} from "rxjs/internal/Subscription";
import {LoggedService} from "../../services/logged.service";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnDestroy{
  private loggedInSubscription: Subscription | undefined;
  public loggedIn: boolean = false;

  constructor(private loggedService: LoggedService) {
    this.loggedInSubscription = this.loggedService?.isLoggedIn().subscribe((value: boolean) => {
      this.loggedIn = value;
    });
  }

  ngOnDestroy() {
    this.loggedInSubscription?.unsubscribe();
  }
}
