import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Certification} from "../model/certification";

@Injectable({
  providedIn: 'root'
})
export class CertificationService {
  private url: string = "https://backend-service-web.onrender.com/certifications";
  private _updates = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }

  toggleUpdates(): void {
    this._updates.next(!this._updates.value);
  }

  getUpdates(): Observable<boolean> {
    return this._updates.asObservable();
  }

  getCertifications(): Observable<Certification[]> {
    return this.http.get<Certification[]>(this.url);
  }

  create(certification: Certification): Observable<Certification> {
    return this.http.post<Certification>(this.url + "/create", certification);
  }

  getCertificationById(id: number): Observable<Certification> {
    return this.http.get<Certification>(this.url + "/" + id);
  }

  deleteCertification(id: number): Observable<Certification> {
    return this.http.delete<Certification>(this.url + "/" + id);
  }

  updateCertification(certification: Certification): Observable<Certification> {
    const headers = new HttpHeaders();
    const params = new HttpParams()
      .append('url', certification.url)
      .append('image', certification.image);
    return this.http.put<Certification>(this.url + "/" + certification.id, JSON.stringify({}),
      {headers: headers, params: params});
  }
}
