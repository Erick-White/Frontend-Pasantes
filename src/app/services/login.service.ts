import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userToken = '';

  constructor(private http: HttpClient, private router: Router, ) { }


  URL = 'https://internshipailogic.azurewebsites.net';

  Correo: string = "";
  login(User: User): Observable<any> {
    const AuthUser = { email: User.email, password: User.password };
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.URL}/api/Auth/login`, AuthUser, { headers: header });
  }



  
  // tslint:disable-next-line: typedef
  register(usuario: User): Observable<any> {
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(
      `${this.URL}/api/Auth/create`,
      authData, { headers: header }
    ).pipe(
      map(resp => {
        console.log('Obteniendo Token');
        // this.saveToken(resp ['idToken']);
        return resp;
      })
    );
  }
  // tslint:disable-next-line: typedef
  Loggeado() {
  if (localStorage.getItem('token') != null) {
  return true;
  }
    else {
     return false;
    }
   }

  // Logout(){
  //   if (window.confirm('Desea cerrar la session??')){
  //     localStorage.removeItem('token');
  //     this.router.navigate(['/login']);
  //   }
  // }

  ChangedButtom(email :string) {
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')
    });
    
    return this.http.get<any>(`${this.URL}/api/Roles/${email}`, { headers })
    
  }
}
