import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CertificationService} from "../../../services/certification.service";

@Component({
  selector: 'app-certifications-update',
  templateUrl: './certifications-update.component.html',
  styleUrls: ['./certifications-update.component.css']
})
export class CertificationsUpdateComponent {
  form: FormGroup
  @Input() url_img: string | undefined;
  @Input() url: string | undefined;


  constructor(private fb: FormBuilder, private certificationService: CertificationService) {
    this.form = fb.group({
      url: ['', Validators.required],
      url_img: ['', Validators.required]
    })
  }
  onSubmitted(event: Event) {
    event.preventDefault()
    if (this.form.valid) {
      this.certificationService.updateCertification(this.form.value)
    } else {
      this.form.markAllAsTouched()
    }
  }
}
