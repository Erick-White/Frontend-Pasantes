import { Injectable } from '@angular/core';
import {Equipos} from '../models/equipos';
import { Observable, Subject, Subscription, throwError } from "rxjs";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  URL = 'https://ailogicinternship.azurewebsites.net/api/Team';

  constructor(private http: HttpClient) { }

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$(){
    return this._refreshNeeded$;
  }

  equipo():Observable<Equipos[]>{
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')

    });
    return this.http
    .get<Equipos[]>(this.URL,{headers});

    
  }
  
  equipos(id:number):Observable<Equipos[]>{
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token') 

    });
    return this.http
    .get<Equipos[]>(`${this.URL}/GetByInternship/${id}`,{headers});
  }

  addNewEquipos(equipo:Equipos):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')

    });
    return this.http
    .post(this.URL, equipo, {headers, responseType: 'text'})
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

  getSingleEquipo(id: number):Observable<Equipos>{
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')

    });
    return this.http
    .get<Equipos>( `${this.URL}/${id}`,{headers})
    .pipe(
      tap(()=>
      console.log())
      )
  }

  updateEquipo(equipo:Equipos,id: number):Observable<void>{
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')

    });
    return this.http.put<void>(`${this.URL}/${id}`,equipo,{headers})
  }

  deleteEquipo(id:number):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')

    });
    return this.http
    .delete( `${this.URL}/${id}`,{headers, responseType: 'text'})
    .pipe(
      tap(()=> {
        this._refreshNeeded$.next();
      })
      )
  }


}
