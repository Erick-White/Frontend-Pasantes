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
    this.Auth.login(this.Usuario).subscribe(resp => {
      Swal.close();
      localStorage.setItem('token', resp.token);
      localStorage.setItem('email', this.Correo);
      Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión correctamente',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['/admin']);

    }, (err) => {
      Swal.fire({
        icon: 'error',
        title: "Error al Autenticarse",
        text: "Correo o contraseña incorrecta",
      });
    });

  }
}
