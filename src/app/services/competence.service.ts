import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Competence } from "../model/competence";

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {
  private url: string = "https://backend-service-web.onrender.com/competence";
  constructor(private http: HttpClient) { }

  getCompetences(): Observable<Competence[]> {
    return this.http.get<Competence[]>(this.url);
  }

  create(project: Competence): Observable<Competence> {
    return this.http.post<Competence>(this.url, project);
  }

  getCompetenceById(id: number): Observable<Competence> {
    return this.http.get<Competence>(this.url+ "/" + id);
  }

  deleteCompetence(id: number): Observable<Competence> {
    return this.http.delete<Competence>(this.url + "/" + id);
  }
}
