import {Component, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs/internal/Subscription";
import {Study} from "../../../model/study";
import {LoggedService} from "../../../services/logged.service";
import {EducationService} from "../../../services/education.service";

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnDestroy {
  private loggedServiceSubscription: Subscription | undefined;
  public studies: Study[] = [];
  public loggedIn: boolean | undefined;

  constructor(private loggedService: LoggedService, private educationService: EducationService) {
    this.loggedServiceSubscription = this.loggedService.isLoggedIn().subscribe(value => {
      this.loggedIn = value
    });
    this.educationService.getEducations().subscribe(value => {
      this.studies = value;
    });
  }

  ngOnDestroy(): void {
    this.loggedServiceSubscription?.unsubscribe();
  }
}
