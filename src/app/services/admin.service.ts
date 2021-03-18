import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { PasantesAll } from '../models/pasantes-all';
import { RolesResponse } from '../models/Roles';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  
  URL = "https://internshipailogic.azurewebsites.net"


  getAllPasantes(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')

    });
    return this.http.get<any>(this.URL + '/api/Intern',{ headers });
  }

 
  getPasantesById(id:any): Observable<PasantesAll> {
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')

    });
    
    return this.http.get<PasantesAll>(`${this.URL}/api/Intern/${id}`,{ headers });
  }

  DeletedPasantes(id: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')

    });
    return this.http.delete<any>(`${this.URL}/api/Intern/${id}`,{ headers } )
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


