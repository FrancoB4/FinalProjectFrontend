import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CompetenceService} from "../../../services/competence.service";
import {Competence} from "../../../model/competence";

@Component({
  selector: 'app-competences-update',
  templateUrl: './competences-update.component.html',
  styleUrls: ['./competences-update.component.css']
})
export class CompetencesUpdateComponent {
  form: FormGroup
  @Input() name: string | undefined;
  @Input() level: number | undefined;
  @Input() id: number | undefined;


  constructor(private fb: FormBuilder, private competenceService: CompetenceService) {
    this.form = fb.group({
      name: ['', Validators.required],
      level: ['', Validators.required]
    })
  }
  onSubmitted(event: Event) {
    event.preventDefault()
    if (this.form.valid) {
      this.competenceService.updateCompetence(new Competence(this.form.value.name, this.form.value.level, this.id))
        .subscribe()
      this.competenceService.toggleUpdates();
    } else {
      this.form.markAllAsTouched()
    }
  }
}
