import {Component, Input} from '@angular/core';
import {LoggedService} from "../../services/logged.service";

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() image: string | undefined;
  @Input() name: string | undefined;
  @Input() description: string | undefined;
  @Input() url: string | undefined;
  @Input() id: number | undefined;


  public loggedIn: boolean = false;
  public updating: boolean = false;

  constructor(loggedService: LoggedService) {
    loggedService.isLoggedIn().subscribe((value: boolean) => {
      this.loggedIn = value;
    });
  }

  toggleUpdating() {
    this.updating = !this.updating;
  }
}
