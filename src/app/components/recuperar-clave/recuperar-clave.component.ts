import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Password } from '../../models/password';
import { LoginService } from '../../services/login.service';
import { PasantesAll } from '../../models/pasantes-all';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.css']
})
export class RecuperarClaveComponent implements OnInit {
  
  Password: Password = {
    password: "",
    confirmpassword:""
  }
  id: string = "";
  constructor(private auth:LoginService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    
  }
  CambiarClave(Form: NgForm) {
    console.log("Hola desde el componente",this.Password);
    this.auth.CambiarClave(this.Password, this.id).subscribe(res => {
      Swal.close();
      Swal.fire({
        icon: 'success',
        title: 'Cambio de contraseña exitoso!',
        showConfirmButton: false,
        timer: 1500
      });
    }, (err) => {
      Swal.fire({
        icon: 'error',
        title: "Error al cambiar la contraseña",
        text: "La clave no es la misma",
      });
    })
    
  }
}
