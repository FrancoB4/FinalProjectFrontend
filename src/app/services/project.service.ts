import { Injectable } from '@angular/core';
import {Project} from "../model/project";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private url: string = "https://backend-service-web.onrender.com/projects";
  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.url);
  }

  create(project: Project): Observable<Project> {
    const headers = new HttpHeaders();
    const params = new HttpParams()
      .append('name', project.name)
      .append('description', project.description)
      .append('url', project.url)
      .append('image', project.image);
    return this.http.post<Project>(this.url + "/create", project);
  }

  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(this.url + '/' + id);
  }

  deleteProject(id: number | undefined): Observable<Project> {
    return this.http.delete<Project>(this.url + '/' + id);
  }

  updateProject(project: Project): Observable<Project> {
    const headers = new HttpHeaders();
    const params = new HttpParams()
      .append('name', project.name)
      .append('description', project.description)
      .append('url', project.url)
      .append('image', project.image);
    return this.http.put<Project>(this.url + '/' + project.id, JSON.stringify({}), {headers: headers,
      params: params});
  }
}
