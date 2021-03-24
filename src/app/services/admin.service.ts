import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { PasantesAll } from '../models/pasantes-all';
import { RolesResponse } from '../models/Roles';
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

  logout() {
    localStorage.removeItem('token');

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

  UpdatePasantes(id: any,pasante:Object): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')

    });
    return this.http.put<any>(`${this.URL}Intern/${id}`,pasante, { headers })
    .pipe(
      tap(()=>{
        this._refreshNeeded$.next();
      })
    );
  }

  ChangedButtom(email :any) {
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')

    });
    return this.http.get<any>(`${this.URL}/api/Roles/${email}`,{ headers } )
  }

  Create(Roles: RolesResponse) {

    const header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.URL}/api/Roles/AssignSecretaryRole`, Roles, { headers: header });


  }


  // Holaa
}


