import { Injectable } from '@angular/core';
import {Convocatoria} from '../models/convocatoria'
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConvocatoriaService {

  URL = 'https://internshipailogic.azurewebsites.net/api/Internship';

  constructor(private http: HttpClient) { }

  convocatorias():Observable<Convocatoria[]>{
    return this.http.get<Convocatoria[]>(this.URL);
  }

  addNewConvocatoria(convoca:Convocatoria):Observable<Convocatoria>{
    return this.http.post<Convocatoria>(this.URL, convoca);
  }
}