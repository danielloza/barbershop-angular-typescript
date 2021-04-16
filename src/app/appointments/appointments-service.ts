import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointments } from "./appointments";
import { Observable, throwError } from "rxjs";
import { Usuario } from "../usuarios/usuario";


@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  [x: string]: any;

  private urlEndPoint: string = 'https://barber-api-spring.herokuapp.com/api/appointments';

  constructor(private http: HttpClient){}

  /*  private isNoAutorizado(e): boolean{
      if(e.status ==401 || e.status==403){
        this.router.navigate(['/login'])
        return true;
      }
      return false;
    }*/
  getAppointments(): Observable<Appointments[]>{return this.http.get<Appointments[]>(this.urlEndPoint+"/listar");}

  delete(id: number): Observable<Appointments>{return this.http.delete<Appointments>(`${this.urlEndPoint}/delete/${id}`,{headers:this.httpHeaders})}

  create(appointment: Appointments): Observable<Appointments>{return this.http.post<Appointments>(this.urlEndPoint+"/add",appointment,{headers:this.httpHeaders})}

  update(appointment: Appointments): Observable<Appointments>{
    return this.http.put<Appointments>(`${this.urlEndPoint}/update/${appointment.id}`, appointment, {headers: this.httpHeaders})
  }

  getAppointment(id: number): Observable<Appointments>{
    return this.http.get<Appointments>(`${this.urlEndPoint}/ver/${id}`)
  }
}
