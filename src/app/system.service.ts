import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

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

  save(login): Observable<any> {
    
    console.log('Request Object: ')
    console.log(login);
    return this.http.post<any>('http://127.0.0.1:8080', login);
  }

  register(register): Observable<any> {
    
    console.log('Request Object: ')
    console.log(register);
    return this.http.post<any>('http://127.0.0.1:8080/register', register);
  }
  getUsuarios(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8080/usuarios');
  }

  getLivros(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8080/livros');
  }
}
