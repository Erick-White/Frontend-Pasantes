import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RolesResponse } from '../models/Roles';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private url = 'https://internshipailogic.azurewebsites.net';

  constructor(private http: HttpClient) { }

  public Role? : RolesResponse[]

  // tslint:disable-next-line: typedef
  // Create(Roles : RolesResponse){

  //   const header = new HttpHeaders().set('Content-Type', 'application/json');
  //   return this.http.post(`${this.url}/api/Roles/AssignSecretaryRole`, Roles, { headers: header });


  // }

  // tslint:disable-next-line: typedef
  GetUsers(email: string){
      const header = new HttpHeaders().set('Content-Type', 'application/json');
      return this.http.get(`${this.url}/api/Roles/${email}`, { headers: header });
  }

  // tslint:disable-next-line: typedef
  AssignRole(Role: RolesResponse) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token')

    });
    return this.http.post(`${this.url}/api/Roles/updateRole/${Role.idUser}`, { headers });
  }

  // UpdateRole(id : string) {
  //   const header = new HttpHeaders().set('Content-Type', 'application/json');
  //   return this.http.post(`${this.url}/api/Roles/updateRole/{id}`, { headers: header });
  // }

}
