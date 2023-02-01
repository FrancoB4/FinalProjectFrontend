import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Study} from "../model/study";

@Injectable({
  providedIn: 'root'
})
export class StudyService {
  private url: string = "https://backend-service-web.onrender.com/study";
  constructor(private http: HttpClient) { }

  getStudies(): Observable<Study[]> {
    return this.http.get<Study[]>(this.url);
  }

  create(study: Study): Observable<Study> {
    return this.http.post<Study>(this.url + "/create", study);
  }

  getStudyById(id: number): Observable<Study> {
    return this.http.get<Study>(this.url+ "/" + id);
  }

  deleteStudy(id: number | undefined): Observable<Study> {
    return this.http.delete<Study>(this.url + "/" + id);
  }


  updateStudy(study: Study): Observable<Study> {
    const headers = new HttpHeaders();
    const params = new HttpParams()
      .append('institution', study.institution)
      .append('description', study.description)
      .append('startDate', study.startDate)
      .append('state', study.state);
    return this.http.put<Study>(this.url + "/" + study.id, JSON.stringify({}), {headers: headers, params: params});
  }
}
