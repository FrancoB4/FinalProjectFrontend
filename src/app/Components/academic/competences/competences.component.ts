import {Component, OnDestroy, OnInit} from '@angular/core';
import {Competence} from "../../../model/competence";
import {LoggedService} from "../../../services/logged.service";
import {CompetenceService} from "../../../services/competence.service";
import {Subscription} from "rxjs/internal/Subscription";


@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit, OnDestroy {
  private loggedServiceSubscription: Subscription | undefined;
  public competences: Competence[] = [];
  public loggedIn: boolean | undefined;


  constructor(private loggedService: LoggedService, private competencesService: CompetenceService) {
    this.loggedServiceSubscription = this.loggedService.isLoggedIn().subscribe(value => {
      this.loggedIn = value
    });
    this.competencesService.getCompetences().subscribe(value => {
      this.competences = value;
    });
  }

  ngOnInit(): void {
    for (let competence of this.competences) {
      for (let i = 0; i < competence.level; i++) {
        competence.levels.push(i);
      }
    }
  }

  ngOnDestroy(): void {
    this.loggedServiceSubscription?.unsubscribe();
  }
}
