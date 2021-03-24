import { Injectable } from '@angular/core';
import {Convocatorias} from '../models/convocatorias'
import { Observable, Subject, Subscription } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConvocatoriaService {

  URL = 'https://ailogicinternship.azurewebsites.net/api/Internship';

  constructor(private http: HttpClient) { }

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$(){
    return this._refreshNeeded$;
  }

  convocatorias():Observable<Convocatorias[]>{
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')

    });
    return this.http
    .get<Convocatorias[]>(this.URL,{headers});
  }

  addNewConvocatoria(convoca:Convocatorias):Observable<Convocatorias>{
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')

    });
    return this.http
    .post<Convocatorias>(this.URL, convoca, {headers})
    .pipe(
      tap(()=>{
        this._refreshNeeded$.next();
      })
    );
  }

  getSingleConvocatoria(id: number):Observable<Convocatorias>{
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')

    });
    return this.http
    .get<Convocatorias>( `${this.URL}/${id}`,{headers})
    .pipe(
      tap(()=> 
      console.log(`fetch convocatoria id=${id}`))
      )
  }

  updateConvo(convo:Convocatorias,id: number):Observable<void>{
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')

    });
    return this.http.put<void>(`${this.URL}/${id}`,convo,{headers})
  }

  deleteConvo(id:number):Observable<void>{
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

