import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterResponse } from '../models/registro';
import { Observable } from 'rxjs/internal/Observable';
import { Pasantes } from '../models/pasantes';
import {  Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PasantesService {

  private url = 'https://internshipailogic.azurewebsites.net';

  // tslint:disable-next-line: variable-name
  private _refreshNeeded$ = new Subject<void>();

  // tslint:disable-next-line: typedef
  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }

  // tslint:disable-next-line: variable-name

  // tslint:disable-next-line: typedef
  registrar(registro: RegisterResponse): Observable<any>{
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(`${this.url}/api/Request/apply`, registro, { headers: header })
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );

  }

  aceptar(pasante: Pasantes):Observable<Pasantes[]>{
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token')

    });

    return this._http.post<Pasantes[]>(`${this.url}/api/Intern`, pasante, { headers } );
  }



  // tslint:disable-next-line: typedef
  solicitudes(): Observable<any>{
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get<any>(`${this.url}/api/Request`, { headers: header});
  }

  // tslint:disable-next-line: typedef
  borrar(id: string){

    const header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(`${this.url}/api/Request/${id}`, { headers: header })
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );


  }

}
