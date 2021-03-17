import { Injectable } from '@angular/core';
import { Asignaciones } from "../models/asignaciones";
import { Observable, Subject, throwError } from "rxjs";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { tap, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AsignacionesService {

  URL = 'https://ailogicinternship.azurewebsites.net/api/assignments'

  constructor(private http: HttpClient) { }

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$(){
    return this._refreshNeeded$;
  }

  asignaciones():Observable<Asignaciones[]>{
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')

    });
    return this.http
    .get<Asignaciones[]>(this.URL,{headers});
  }

  addNewAsignacion(Asig:Asignaciones):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')
    });
    return this.http
    .post(this.URL, Asig,{headers})
    .pipe(
      tap(()=>{
        this._refreshNeeded$.next();
      })
    ).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse){
    return throwError(error)
  }

  getSingleAsignacion(id: number):Observable<Asignaciones>{
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')

    });
    return this.http
    .get<Asignaciones>( `${this.URL}/${id}`,{headers})
    .pipe(
      tap(()=>
      console.log(`fetch convocatoria id=${id}`))
      )
  }

  deleteAsignacion(id:number):Observable<void>{
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')

    });
    return this.http
    .delete<void>( `${this.URL}/${id}`,{headers})
    .pipe(
      tap(()=> {
        this._refreshNeeded$.next();
      })
      )
  }


}
