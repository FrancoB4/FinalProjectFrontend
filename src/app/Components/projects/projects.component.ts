import { Component } from '@angular/core';
import {ProjectService} from "../../services/project.service";
import {Project} from "../../model/project";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {
    this.projectService.getProjects().subscribe(value => {
      this.projects = value
    });
  }
}
