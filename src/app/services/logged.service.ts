import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class LoggedService {
  private _loggedIn = new BehaviorSubject<boolean>(false);
  constructor() { }

  setLoggedIn(value: boolean): void {
    this._loggedIn.next(value);
  }

  isLoggedIn(): Observable<boolean> {
    return this._loggedIn.asObservable();
  }
}
