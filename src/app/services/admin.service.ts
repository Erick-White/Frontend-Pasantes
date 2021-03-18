import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { PasantesAll } from '../models/pasantes-all';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  
  URL = "https://ailogicinternship.azurewebsites.net/api/"
  
  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$(){
    return this._refreshNeeded$;
  }

  getAllPasantes(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')

    });
    return this.http.get<any>(this.URL + 'Intern', { headers })
    .pipe(
      tap(()=>{
        this._refreshNeeded$.next();
      })
    );
  }

 
  getPasantesById(id:any): Observable<PasantesAll> {
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')

    });
    
    return this.http.get<PasantesAll>(`${this.URL}Intern/${id}`, { headers })
    .pipe(
      tap(()=>{
        this._refreshNeeded$.next();
      })
    );
  }

  DeletedPasantes(id: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')

    });
    return this.http.delete<any>(`${this.URL}Intern/${id}`, { headers })
    .pipe(
      tap(()=>{
        this._refreshNeeded$.next();
      })
    );
  }


  
  // Holaa
}
  
