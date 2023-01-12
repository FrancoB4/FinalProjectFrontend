import {Component, Input} from '@angular/core';
import {LoggedService} from "../../services/logged.service";
import {ProjectService} from "../../services/project.service";

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

  constructor(private loggedService: LoggedService, private projectService: ProjectService) {
    loggedService.isLoggedIn().subscribe((value: boolean) => {
      this.loggedIn = value;
    });
  }

  toggleUpdating() {
    this.updating = !this.updating;
  }

  deleteProject() {
    this.projectService.deleteProject(this.id).subscribe();
  }
}
