import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userToken: string = "";

  constructor(private http: HttpClient, private router: Router,) { }


  URL: string = "https://internshipailogic.azurewebsites.net/api/Auth/login"


  login(User: User) {
    const AuthUser = { email: User.email, password: User.password }
   
    return this.http.post<any>(this.URL, AuthUser);
  }

  Loggeado() {
    if (localStorage.getItem('token') != null) {
      return true
    }
    else {
      return false
    }
  }
  
  Logout(){
    if(window.confirm('Desea cerrar la session??')){
      localStorage.removeItem('token')
      this.router.navigate(['/login'])
    }
  }
}