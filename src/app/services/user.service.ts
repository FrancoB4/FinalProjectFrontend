import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../model/user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = "https://backend-service-web.onrender.com/users";
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User> {
    return this.http.get<User>(this.url);
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.url + "/create", user);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.url+ "/" + id);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(this.url + "/" + id);
  }
}
