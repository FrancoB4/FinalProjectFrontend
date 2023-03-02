import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Competence} from "../../model/competence";
import {CompetenceService} from "../../services/competence.service";

@Component({
  selector: 'app-create-competence',
  templateUrl: './create-competence.component.html',
  styleUrls: ['./create-competence.component.css']
})
export class CreateCompetenceComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private competenceService: CompetenceService) {
    this.form = fb.group({
      name: ['', Validators.required],
      level: ['', Validators.required]
    });
  }

  get Name() {
    return this.form.get('name');
  }
  get Level() {
    return this.form.get('level');
  }

  onSubmitted(event: Event) {
    event.preventDefault()
    if (this.form.valid) {
      this.competenceService.create(new Competence(
        this.Name?.value, this.Level?.value)).subscribe();
      this.competenceService.toggleUpdates();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
