import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CertificationService} from "../../../services/certification.service";
import {Certification} from "../../../model/certification";

@Component({
  selector: 'app-certifications-update',
  templateUrl: './certifications-update.component.html',
  styleUrls: ['./certifications-update.component.css']
})
export class CertificationsUpdateComponent {
  form: FormGroup
  @Input() url: string | undefined;
  @Input() image: string | undefined;
  @Input() id: number | undefined;


  constructor(private fb: FormBuilder, private certificationService: CertificationService) {
    this.form = fb.group({
      url: ['', Validators.required],
      url_img: ['', Validators.required]
    })
  }
  onSubmitted(event: Event) {
    event.preventDefault()
    if (this.form.valid) {
      this.certificationService.updateCertification(this.id, new Certification(this.form.value.url, this.form.value.url_img))
        .subscribe()
    } else {
      this.form.markAllAsTouched()
    }
  }
}
