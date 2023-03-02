import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ProjectService} from "../../services/project.service";
import {Project} from "../../model/project";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private projectService: ProjectService) {
    this.form = fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      url: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  get Name() {
    return this.form.get('name');
  }
  get Description() {
    return this.form.get('description');
  }
  get Url() {
    return this.form.get('url');
  }
  get Image() {
    return this.form.get('image');
  }

  onSubmitted(event: Event) {
    event.preventDefault()
    if (this.form.valid) {
      this.projectService.create(new Project(
        this.Name?.value, this.Description?.value, this.Url?.value, this.Image?.value)).subscribe();
      this.projectService.toggleUpdates();
    } else {
      this.form.markAllAsTouched();
    }
  }
}


