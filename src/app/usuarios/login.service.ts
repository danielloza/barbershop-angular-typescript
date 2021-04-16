import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Usuario } from './usuario';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  [x: string]: any;
  private urlEndPointLogin: string = 'https://barber-api-spring.herokuapp.com/api/login';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  private userSubject: BehaviorSubject<Usuario>;
  public usuario: Observable<Usuario>;


  constructor(private http: HttpClient, private router: Router) {
      this.userSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('usuario')));
   }

  public get userValue(): Usuario{
    return this.userSubject.value;
  }

  getLogin(usuario:Usuario): Observable<Usuario>{return this.http.get<Usuario>(`${this.urlEndPointLogin}/ver/${usuario.username}/${usuario.password}`)}

/*  getLogin(usuario:Usuario){
    return this.http.get<Usuario>(`${this.urlEndPointLogin}/ver/${usuario.username}/${usuario.password}`)
    .pipe(map(usuario=>{
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.userSubject.next(usuario);
    return usuario;
  }));
}*/
}
