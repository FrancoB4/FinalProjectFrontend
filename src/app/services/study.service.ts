import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Study} from "../model/study";

@Injectable({
  providedIn: 'root'
})
export class StudyService {
  private url: string = "https://backend-service-web.onrender.com/studies";
  constructor(private http: HttpClient) { }

  getEducations(): Observable<Study[]> {
    return this.http.get<Study[]>(this.url);
  }

  create(study: Study): Observable<Study> {
    const headers = new HttpHeaders();
    const params = new HttpParams()
      .append('institution', study.institution)
      .append('description', study.description)
      .append('date', study.date)
      .append('state', study.state);
    return this.http.post<Study>(this.url + "/create", JSON.stringify({}), {headers: headers, params: params});
  }

  getEducationById(id: number): Observable<Study> {
    return this.http.get<Study>(this.url+ "/" + id);
  }

  deleteEducation(id: number): Observable<Study> {
    return this.http.delete<Study>(this.url + "/" + id);
  }

  updateEducation(study: Study): Observable<Study> {
    const headers = new HttpHeaders();
    const params = new HttpParams()
      .append('institution', study.institution)
      .append('description', study.description)
      .append('date', study.date)
      .append('state', study.state);
    return this.http.put<Study>(this.url + "/update" + study.id, JSON.stringify({}), {headers: headers, params: params});
  }
}
