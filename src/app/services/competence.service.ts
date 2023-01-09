import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable } from "rxjs";
import { Competence } from "../model/competence";

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {
  private url: string = "https://backend-service-web.onrender.com/competences";
  constructor(private http: HttpClient) { }

  getCompetences(): Observable<Competence[]> {
    return this.http.get<Competence[]>(this.url);
  }

  create(competence: Competence): Observable<Competence> {
    const headers = new HttpHeaders();
    const params = new HttpParams().append('name', competence.name)
      .append('level', competence.level);
    return this.http.post<Competence>(this.url + "/create", JSON.stringify({}), {headers: headers, params: params});
  }

  getCompetenceById(id: number): Observable<Competence> {
    return this.http.get<Competence>(this.url + "/" + id);
  }

  deleteCompetence(id: number): Observable<Competence> {
    return this.http.delete<Competence>(this.url + "/" + id);
  }
}
