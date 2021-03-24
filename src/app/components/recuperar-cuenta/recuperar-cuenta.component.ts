import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Recovery } from '../../models/recovery';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-recuperar-cuenta',
  templateUrl: './recuperar-cuenta.component.html',
  styleUrls: ['./recuperar-cuenta.component.css']
})
export class RecuperarCuentaComponent implements OnInit {
 
  recovery: Recovery = {
    email:""
  }
  constructor(private auth:LoginService) { }
  
  ngOnInit(): void {
    
  }

  RecuperarCuenta(Form:NgForm) {
    console.log(this.recovery);
    this.auth.RecuperarCuenta(this.recovery).subscribe(resp => {
      console.log(resp);
      
    })
    
    
  }
  
}
