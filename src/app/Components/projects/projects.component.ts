import {Component, OnDestroy} from '@angular/core';
import {ProjectService} from "../../services/project.service";
import {Project} from "../../model/project";
import {LoggedService} from "../../services/logged.service";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnDestroy {
  projects: Project[] = [];
  private loggedServiceSubscription: Subscription | undefined;
  public loggedIn: boolean = false;
  public adding: boolean = false;

  constructor(private projectService: ProjectService, private loggedService: LoggedService) {
    this.projectService.getProjects().subscribe(value => {
      this.projects = value
    });
    this.loggedServiceSubscription = this.loggedService.isLoggedIn().subscribe((value: boolean) => {
      this.loggedIn = value;
    });
  }

  ngOnDestroy() {
    this.loggedServiceSubscription?.unsubscribe();
  }

  toggleAdd() {
    this.adding = !this.adding;
  }
}
