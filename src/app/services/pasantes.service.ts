import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterResponse } from '../models/registro';
import { Observable } from 'rxjs/internal/Observable';
import { Pasantes } from '../models/pasantes';

@Injectable({
  providedIn: 'root'
})
export class PasantesService {

  private url = 'https://internshipailogic.azurewebsites.net';

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }

  // tslint:disable-next-line: typedef
  registrar(registro: RegisterResponse): Observable<any>{
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(`${this.url}/api/Request/apply`, registro, { headers: header });

  }



  // tslint:disable-next-line: typedef
  solicitudes(): Observable<Pasantes[]>{
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get<Pasantes[]>(`${this.url}/api/Request`, { headers: header});
  }

}
