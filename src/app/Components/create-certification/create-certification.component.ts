import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CertificationService} from "../../services/certification.service";
import {Certification} from "../../model/certification";

@Component({
  selector: 'app-create-certification',
  templateUrl: './create-certification.component.html',
  styleUrls: ['./create-certification.component.css']
})
export class CreateCertificationComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private certificationService: CertificationService) {
    this.form = fb.group({
      url: ['', Validators.required],
      url_img: ['', Validators.required]
    });
  }

  get Url() {
    return this.form.get('url');
  }
  get UrlImg() {
    return this.form.get('url_img');
  }

  onSubmitted(event: Event) {
    event.preventDefault()
    if (this.form.valid) {
      this.certificationService.create(new Certification(
        this.Url?.value, this.UrlImg?.value)).subscribe();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
