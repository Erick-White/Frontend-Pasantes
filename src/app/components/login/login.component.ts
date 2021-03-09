import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  Usuario: User = {
    nombre:"",
    email: "",
    password: ""
  }
  constructor(private Auth: LoginService,
  private router :Router) { }

  
  ngOnInit() {
    let token = localStorage.getItem('email');
    this.Usuario = new User();
    if(token){
      this.Usuario.email = token;
      
    }
    
  }
    
  login(form: NgForm) {
    this.Auth.login(this.Usuario).subscribe(resp => {
      localStorage.setItem('token', resp['token'])
      this.router.navigate(['/recuperar-cuenta'])
         
    })
    
  }
}
