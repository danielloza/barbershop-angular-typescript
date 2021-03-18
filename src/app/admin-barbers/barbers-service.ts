import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Barbers } from "./barbers";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class BarbersService {
  private urlEndPoint: string = 'https://barber-api-spring.herokuapp.com/api/barberos';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient){}

  getBarbers(): Observable<Barbers[]>{return this.http.get<Barbers[]>(this.urlEndPoint+"/listar");}

  delete(id: number): Observable<Barbers>{return this.http.delete<Barbers>(`${this.urlEndPoint}/delete/${id}`,{headers:this.httpHeaders})}

  create(barber: Barbers): Observable<Barbers>{return this.http.post<Barbers>(this.urlEndPoint+"/add",barber,{headers:this.httpHeaders})}

  update(barber: Barbers): Observable<Barbers>{
    return this.http.put<Barbers>(`${this.urlEndPoint}/update/${barber.id}`, barber, {headers: this.httpHeaders})
  }

  getBarber(id: number): Observable<Barbers>{
    return this.http.get<Barbers>(`${this.urlEndPoint}/ver/${id}`)
  }
}
