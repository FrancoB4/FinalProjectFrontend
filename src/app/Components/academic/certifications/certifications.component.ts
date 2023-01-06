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

  constructor(private certificationService: CertificationService, private loggedService: LoggedService) {
    this.loggedServiceSubscription = loggedService.isLoggedIn().subscribe(value => {
      this.loggedIn = value;
    });
    this.certificationService.getCertifications().subscribe(value => {
      this.certifications = value;
    });
  }
  ngOnDestroy() {
    this.loggedServiceSubscription?.unsubscribe();
  }

  x = [1, 2, 3, 4, 5];
}
