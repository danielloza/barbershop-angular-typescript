import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Package } from "./package";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private urlEndPoint: string = 'https://barber-api-spring.herokuapp.com/api/productos';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient){}

  getPackages(): Observable<Package[]>{return this.http.get<Package[]>(this.urlEndPoint+"/listar");}

  delete(id: number): Observable<Package>{return this.http.delete<Package>(`${this.urlEndPoint}/delete/${id}`,{headers:this.httpHeaders})}

  create(paquete: Package): Observable<Package>{return this.http.post<Package>(this.urlEndPoint+"/add",paquete,{headers:this.httpHeaders})}

  update(paquete: Package): Observable<Package>{
    return this.http.put<Package>(`${this.urlEndPoint}/update/${paquete.id}`, paquete, {headers: this.httpHeaders})
  }

  getPaquete(id: number): Observable<Package>{
    return this.http.get<Package>(`${this.urlEndPoint}/ver/${id}`)
  }
}
