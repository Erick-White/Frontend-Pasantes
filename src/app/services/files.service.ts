import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Files } from '../models/files';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
 

  constructor(private http: HttpClient, private router: Router, ) { }


  URL = "https://ailogicinternship.azurewebsites.net/api/Files"

  files(id:number):Observable<Files[]>{
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')

    });
    return this.http
    .get<Files[]>(`${this.URL}/${id}`,{headers});
  }


}
