import { Injectable } from '@angular/core';
import { Asignaciones } from "../models/asignaciones";
import { Observable, Subject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AsignacionesService {

  URL = 'https://ailogicinternship.azurewebsites.net/api/Assignments'

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

  addNewAsignacion(Asig:Asignaciones):Observable<Asignaciones>{
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')

    });
    return this.http
    .post<Asignaciones>(this.URL, Asig, {headers})
    .pipe(
      tap(()=>{
        this._refreshNeeded$.next();
      })
    );
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
