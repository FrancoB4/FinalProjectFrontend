import {Component, Input, OnInit} from '@angular/core';
import {LoggedService} from "../../../services/logged.service";
import {CompetenceService} from "../../../services/competence.service";

@Component({
  selector: 'app-competences-card',
  templateUrl: './competences-card.component.html',
  styleUrls: ['./competences-card.component.css']
})
export class CompetencesCardComponent implements OnInit{
  @Input() name: string | undefined;
  @Input() level: number | undefined;
  @Input() id: number | undefined;
  public levels: number[] = [];
  public loggedIn: boolean = false;
  public updating: boolean = false;

  constructor(private loggedService: LoggedService, private competenceService: CompetenceService) {
    this.loggedService.isLoggedIn().subscribe(value => {
      this.loggedIn = value
    });
  }

  ngOnInit() {
    // @ts-ignore
    for (let i = this.level; i > 0; i--) {
      // @ts-ignore
      this.levels.push(i)
    }
  }

  toggleUpdating() {
    this.updating = !this.updating;
  }

  deleteCompetence() {
    this.competenceService.deleteCompetence(this.id).subscribe();
    this.competenceService.toggleUpdates();
  }
}
