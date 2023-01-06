import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Study} from "../model/study";

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private url: string = "https://backend-service-web.onrender.com/education";
  constructor(private http: HttpClient) { }

  getEducations(): Observable<Study[]> {
    return this.http.get<Study[]>(this.url);
  }

  create(project: Study): Observable<Study> {
    return this.http.post<Study>(this.url, project);
  }

  getEducationById(id: number): Observable<Study> {
    return this.http.get<Study>(this.url+ "/" + id);
  }

  deleteEducation(id: number): Observable<Study> {
    return this.http.delete<Study>(this.url + "/" + id);
  }
}
