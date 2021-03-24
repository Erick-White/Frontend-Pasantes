import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Password } from '../../models/password';
import { LoginService } from '../../services/login.service';
import { PasantesAll } from '../../models/pasantes-all';


@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.css']
})
export class RecuperarClaveComponent implements OnInit {
  
  Password: Password = {
    idUser:"",
    password: "",
    confirmpassword:""
  }
  id: string = "";
  constructor(private auth:LoginService) { }

  ngOnInit(): void {
  }
  CambiarClave(form: NgForm) {
    this.auth.RecuperarClave(this.Password, this.id).subscribe(res => {
      console.log(res);
    
  })
  }
}
