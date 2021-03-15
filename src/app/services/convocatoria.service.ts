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

  //Problema: En vez de cojer el id que esta en la base datos, no coje ningun valor por ende aparece null
  getSingleConvocatoria(id: number):Observable<Convocatorias>{
    return this.http
    .get<Convocatorias>( `${this.URL}/${id}`)
    .pipe(
      tap(()=> 
      console.log(`fetch convocatoria id=${id}`))
      )
      
    
    
  }
  

}