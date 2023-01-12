import {Component, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs/internal/Subscription";
import {Study} from "../../../model/study";
import {LoggedService} from "../../../services/logged.service";
import {StudyService} from "../../../services/study.service";

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnDestroy {
  private loggedServiceSubscription: Subscription | undefined;
  public studies: Study[] = [];
  public loggedIn: boolean | undefined;
  public adding: boolean = false;

  constructor(private loggedService: LoggedService, private educationService: StudyService) {
    this.loggedServiceSubscription = this.loggedService.isLoggedIn().subscribe(value => {
      this.loggedIn = value
    });
    this.educationService.getStudies().subscribe(value => {
      this.studies = value;
    });
  }

  toggleAdding() {
    this.adding = !this.adding;
  }

  ngOnDestroy(): void {
    this.loggedServiceSubscription?.unsubscribe();
  }
}
