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


  URL = "https://internshipailogic.azurewebsites.net"

  // FileUpload(File:Files): Observable<any> {
  //   const Filess = {Filename: File.fileName,Path: File.path};
  //   const header = new HttpHeaders().set('Content-Type', 'application/json');
  //   return this.http.post(`${this.URL}/api/Files`, Filess, { headers: header });
  // }
}
