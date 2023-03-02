import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Study} from "../model/study";

@Injectable({
  providedIn: 'root'
})
export class StudyService {
  private url: string = "https://backend-service-web.onrender.com/study";
  private _updates = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  toggleUpdates(): void {
    this._updates.next(!this._updates.value);
  }

  getUpdates(): Observable<boolean> {
    return this._updates.asObservable();
  }

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
      .append('date', study.startDate)
      .append('state', study.state);

    return this.http.put<Study>(this.url + "/" + study.id, JSON.stringify({}), {headers: headers, params: params});
  }
}
