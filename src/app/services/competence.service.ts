import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import { Competence } from "../model/competence";

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {
  private url: string = "https://backend-service-web.onrender.com/competences";
  private _updates = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }

  toggleUpdates(): void {
    this._updates.next(!this._updates.value);
  }

  getUpdates(): Observable<boolean> {
    return this._updates.asObservable();
  }

  getCompetences(): Observable<Competence[]> {
    return this.http.get<Competence[]>(this.url);
  }

  create(competence: Competence): Observable<Competence> {
    return this.http.post<Competence>(this.url + "/create", competence);
  }

  getCompetenceById(id: number): Observable<Competence> {
    return this.http.get<Competence>(this.url + "/" + id);
  }

    deleteCompetence(id: number | undefined): Observable<Competence> {
    return this.http.delete<Competence>(this.url + "/" + id);
  }

  updateCompetence(competence: Competence): Observable<Competence> {
    const headers = new HttpHeaders();
    const params = new HttpParams().append('name', competence.name)
      .append('level', competence.level);
    return this.http.put<Competence>(this.url + "/" + competence.id, JSON.stringify({}), {headers: headers, params: params});
  }
}
