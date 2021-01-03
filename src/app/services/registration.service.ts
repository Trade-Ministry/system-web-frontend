import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private _http: HttpClient ) { }

  public loginUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>('http://localhost:8080/login', user).pipe(
      map(
        userData => {
          sessionStorage.setItem('nic', user.nic);
          return userData;
        }
      )
    );
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('nic');
    return !(user == null);
  }

  public registerUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>('http://localhost:8080/registeruser', user);
  }

  public getUserFromRemote(): Observable<any> {
    return this._http.get<any>('http://localhost:8080/getuser');
  }

  public updateUserFromRemote(user: User): Observable<any> {
    return this._http.put<any>('http://localhost:8080/updateuser', user);
  }

}
