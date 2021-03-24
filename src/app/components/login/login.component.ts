import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading: boolean = false;
  Usuario: User = {
    nombre:'',
    email: '',
    password: ''
  };

  Correo: any;
  constructor(private Auth: LoginService,
              private router: Router) { }


  // tslint:disable-next-line: typedef
  ngOnInit() {
    const token = localStorage.getItem('token');
    this.Usuario = new User();
    if (token){
      this.Correo = this.Usuario.email;

    }

  }

  // tslint:disable-next-line: typedef
  login(form: NgForm) {
    this.loading = true;
    this.Auth.login(this.Usuario).subscribe(resp => {
      Swal.close();
      localStorage.setItem('token', resp.token);
      localStorage.setItem('email',  this.Usuario.email);
      
      this.Auth.getRoleByEmail(this.Usuario.email).subscribe(response => {

      if(response === "Admin"){
         this.router.navigate(['/Admin']);
      }
      else{
          this.router.navigate(['/home-pasantes']);
      }
    },error => {
      if(error.error['text'] == "Admin"){

         this.router.navigate(['/admin']);
      }
      else{

          this.router.navigate(['/home-pasantes']);
      }
    });
      Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión correctamente',
        showConfirmButton: false,
        timer: 1500
      });
    }, (err) => {
      this.loading = false;
      Swal.fire({
        icon: 'error',
        title: "Error al Autenticarse",
        text: "Correo o contraseña incorrecta",
      });
    });





  }
}
