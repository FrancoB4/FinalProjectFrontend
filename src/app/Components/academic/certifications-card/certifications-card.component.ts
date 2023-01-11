import {Component, Input} from '@angular/core';
import {LoggedService} from "../../../services/logged.service";

@Component({
  selector: 'app-certifications-card',
  templateUrl: './certifications-card.component.html',
  styleUrls: ['./certifications-card.component.css']
})
export class CertificationsCardComponent {
  @Input() url: string | undefined;
  @Input() url_img: string | undefined;
  public loggedIn: boolean = false;
  public updating: boolean = false;

  constructor(private loggedService: LoggedService) {
    this.loggedService.isLoggedIn().subscribe((value) => {
      this.loggedIn = value;
    });
  }

  toggleUpdating() {
    this.updating = !this.updating;
  }
}
