import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterResponse } from '../models/registro';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PasantesService {

  private url = 'https://internshipailogic.azurewebsites.net';

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }

  // tslint:disable-next-line: typedef
  registrar(registro: RegisterResponse): Observable<any>{
    // const authData = {
    //   nombre: registro.name,
    //   apellido: registro.lastname,
    //   cedula: registro.cedula,
    //   phone: registro.phone,
    //   password: registro.lastname,
    //   returnSecureToken: true
    // };
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(`${this.url}/api/Intern`, registro, { headers: header });

  }
}
