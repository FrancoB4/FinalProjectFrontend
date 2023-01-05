import { Injectable } from '@angular/core';
import {Project} from "../model/project";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private url: string = "https://backend-service-web.onrender.com/project";
  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.url);
  }

  create(project: Project): Observable<Project> {
    return this.http.post<Project>(this.url, project);
  }

  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(this.url+ "/" + id);
  }

  deleteProject(id: number): Observable<Project> {
    return this.http.delete<Project>(this.url + "/" + id);
  }
}
