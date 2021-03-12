import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { PasantesAll } from '../models/pasantes-all';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  
  URL = "https://internshipailogic.azurewebsites.net"


  getAllPasantes():Observable<any> {
    return this.http.get<any>(this.URL + '/api/Intern');
  }

  getPasantesById(id:any):Observable<PasantesAll> {
    return this.http.get<PasantesAll>(`${this.URL}/api/Intern/${id}`)
  }

  DeletedPasantes(id:any):Observable<any> {
    return this.http.delete<any>(`${this.URL}/api/Intern/${id}`)
  }
}
  
