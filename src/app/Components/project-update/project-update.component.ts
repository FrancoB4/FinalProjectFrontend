import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProjectService} from "../../services/project.service";

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css']
})
export class ProjectUpdateComponent {
  form: FormGroup
  @Input() image: string | undefined;
  @Input() name: string | undefined;
  @Input() description: string | undefined;
  @Input() url: string | undefined;


  constructor(private fb: FormBuilder, private projectService: ProjectService) {
    this.form = fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      url: ['', Validators.required],
      image: ['', Validators.required]
    })
  }
  onSubmitted(event: Event) {
    event.preventDefault()
    if (this.form.valid) {
      this.projectService.updateProject(this.form.value)
    } else {
      this.form.markAllAsTouched()
    }
  }
}
