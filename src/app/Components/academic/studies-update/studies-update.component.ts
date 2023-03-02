import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Study} from "../../../model/study";
import {StudyService} from "../../../services/study.service";

@Component({
  selector: 'app-studies-update',
  templateUrl: './studies-update.component.html',
  styleUrls: ['./studies-update.component.css']
})
export class StudiesUpdateComponent {
  form: FormGroup
  @Input() study: Study = new Study("", "", "", "");


  constructor(private fb: FormBuilder, private studyService: StudyService) {
    this.form = fb.group({
      institution: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      state: ['', Validators.required]
    })
  }
  onSubmitted(event: Event) {
    event.preventDefault()
    if (this.form.valid) {
      this.studyService.updateStudy(new Study(this.form.value.institution, this.form.value.description,
        this.form.value.date, this.form.value.state, this.study.id)).subscribe();
      this.studyService.toggleUpdates();
    } else {
      this.form.markAllAsTouched()
    }
  }
}
