import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Certification} from "../model/certification";

@Injectable({
  providedIn: 'root'
})
export class CertificationService {
  private url: string = "https://backend-service-web.onrender.com/certification";
  constructor(private http: HttpClient) { }

  getCertifications(): Observable<Certification[]> {
    return this.http.get<Certification[]>(this.url);
  }

  create(project: Certification): Observable<Certification> {
    return this.http.post<Certification>(this.url, project);
  }

  getCertificationById(id: number): Observable<Certification> {
    return this.http.get<Certification>(this.url+ "/" + id);
  }

  deleteCertification(id: number): Observable<Certification> {
    return this.http.delete<Certification>(this.url + "/" + id);
  }
}
