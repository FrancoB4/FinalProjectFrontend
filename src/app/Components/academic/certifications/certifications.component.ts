import {Component, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs/internal/Subscription";
import {Certification} from "../../../model/certification";
import {CertificationService} from "../../../services/certification.service";
import {LoggedService} from "../../../services/logged.service";

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnDestroy{
  private loggedServiceSubscription: Subscription | undefined;
  public certifications: Certification[] = []
  public loggedIn: boolean = false;
  public adding: boolean = false;

  constructor(private certificationService: CertificationService, private loggedService: LoggedService) {
    this.loggedServiceSubscription = loggedService.isLoggedIn().subscribe(value => {
      this.loggedIn = value;
    });
    this.certificationService.getCertifications().subscribe(value => {
      this.certifications = value;
    });
    this.certificationService.getUpdates().subscribe(updates => {
      if (updates) {
        this.updateCertifications().then(r => {});
      }
    });
  }

  async updateCertifications() {
    let response = await this.certificationService.getCertifications().toPromise();
    if (response) {
      this.certificationService.getCertifications().subscribe(value => {
        this.certifications = value;
      });
      this.certificationService.toggleUpdates();
    }
  }

  ngOnDestroy() {
    this.loggedServiceSubscription?.unsubscribe();
  }

  x = [1, 2, 3, 4, 5];

  toggleAdd() {
    this.adding = !this.adding;
  }
}
