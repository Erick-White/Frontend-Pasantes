import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Password } from '../models/password';
import { Recovery } from '../models/recovery';





@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userToken = '';

  constructor(private http: HttpClient, private router: Router, ) { }


  URL = 'https://ailogicinternship.azurewebsites.net/api/';

  Correo: string = "";

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$(){
    return this._refreshNeeded$;
  }

  login(User: User): Observable<any> {
    const AuthUser = { email: User.email, password: User.password };
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.URL}Auth/login`, AuthUser, { headers: header });
  }


 getRoleByEmail(email: string): Observable<any> {
     const headers = new HttpHeaders({
       'Authorization':'Bearer ' + localStorage.getItem('token')

     });

    console.log(email);
    return this.http.get(`${this.URL}Roles/${email}`, {headers});
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
      `${this.URL}Auth/create`,
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

    return this.http.get<any>(`${this.URL}Roles/${email}`, { headers })

  }


  CambiarClave(Recovery: Recovery): Observable<any> {
    const change = { email: Recovery.email};
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.URL}Auth/linkchangepassword`,change,{ headers: header });

  }





  RecuperarClave(password: Password, id: string): Observable<any> {
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    const Change = { NewPass: password.password, RepeatNewPass: password.confirmpassword };
    console.log("Hola desde password " + password)
    console.log("klk desde el change" +Change)
    return this.http.post<any>(`${this.URL}Auth/resetpassword/${id}`,Change,{ headers: header });
    
  }
}
