import { Injectable } from '@angular/core';
import {Convocatorias} from '../models/convocatorias'
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConvocatoriaService {

  URL = 'https://internshipailogic.azurewebsites.net/api/Internship';

  constructor(private http: HttpClient) { }

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$(){
    return this._refreshNeeded$;
  }

  convocatorias():Observable<Convocatorias[]>{
    return this.http
    .get<Convocatorias[]>(this.URL);
  }

  addNewConvocatoria(convoca:Convocatorias):Observable<Convocatorias>{
    return this.http
    .post<Convocatorias>(this.URL, convoca)
    .pipe(
      tap(()=>{
        this._refreshNeeded$.next();
      })
    );
  }

  getSingleConvocatoria(id: number):Observable<Convocatorias>{
    return this.http
    .get<Convocatorias>( `${this.URL}/${id}`)
    .pipe(
      tap(()=> 
      console.log(`fetch convocatoria id=${id}`))
      )
  }

  updateConvo(convo:Convocatorias,id: number):Observable<void>{
    return this.http.put<void>(`${this.URL}/${id}`,convo)
  }

  deleteConvo(id:number):Observable<void>{
    return this.http
    .delete<void>( `${this.URL}/${id}`)
    .pipe(
      tap(()=> {
        this._refreshNeeded$.next();
      })
      )
  }
  }

