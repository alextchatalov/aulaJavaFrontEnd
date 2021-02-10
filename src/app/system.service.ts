import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  login;
  constructor(private http: HttpClient) { }

  setLogin(username, password) {
    this.login.username = username;
    this.login.password = password;
  }
 getLogin() {
    return this.login;
  }

  save(login): any {
    
    console.log('Request Object: ')
    console.log(login);
    return this.http.post<any>('http://127.0.0.1:8080', login);
  }
}
