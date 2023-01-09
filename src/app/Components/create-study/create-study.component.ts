import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Study} from "../../model/study";
import {StudyService} from "../../services/study.service";

@Component({
  selector: 'app-create-study',
  templateUrl: './create-study.component.html',
  styleUrls: ['./create-study.component.css']
})
export class CreateStudyComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private studyService: StudyService) {
    this.form = fb.group({
      institution: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  get Institution() {
    return this.form.get('institution');
  }
  get Description() {
    return this.form.get('description');
  }
  get Date() {
    return this.form.get('date');
  }
  get State() {
    return this.form.get('image');
  }

  onSubmitted(event: Event) {
    event.preventDefault()
    if (this.form.valid) {
      this.studyService.create(new Study(
        this.Institution?.value, this.Description?.value, this.Date?.value, this.State?.value)).subscribe();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
