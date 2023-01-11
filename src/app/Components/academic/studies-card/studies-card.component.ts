import {Component, Input} from '@angular/core';
import {Study} from "../../../model/study";
import {StudyService} from "../../../services/study.service";
import {LoggedService} from "../../../services/logged.service";

@Component({
  selector: 'app-studies-card',
  templateUrl: './studies-card.component.html',
  styleUrls: ['./studies-card.component.css']
})
export class StudiesCardComponent {
  @Input() study: Study = new Study("", "", "", "");
  public loggedIn: boolean = false;
  public updating: boolean = false;

  constructor(private loggedService: LoggedService, private studyService: StudyService) {
    this.loggedService.isLoggedIn().subscribe((value) => {
      this.loggedIn = value;
    });
  }

  toggleUpdating() {
    this.updating = !this.updating;
  }
}
