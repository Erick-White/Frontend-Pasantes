import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Password } from '../../models/password';
import { LoginService } from '../../services/login.service';
import { PasantesAll } from '../../models/pasantes-all';
import { ActivatedRoute } from '@angular/router';


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
    
  }
  CambiarClave(form: NgForm) {
    console.log(this.Password);
    this.auth.RecuperarClave(this.Password, this.id).subscribe(res => {
      console.log(res);
    
  })
  }
}
