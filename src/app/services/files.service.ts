import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Files } from '../models/files';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FilesAll } from '../models/FilesAll';

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



  GetFilesAndAssigments(id: number):Observable<FilesAll[]>{
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')

    });
     return this.http
    .get<FilesAll[]>(`${this.URL}/assignments/${id}`,{headers});
  }



}
