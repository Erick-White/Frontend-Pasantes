import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterResponse } from 'src/app/models/registro';
import { PasantesService } from '../../services/pasantes.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registro = new RegisterResponse();

  constructor(private Services: PasantesService) { }

  ngOnInit(): void {
   // this.registro = new RegisterResponse();
  }

  // tslint:disable-next-line: typedef
  onSubmit(f: NgForm){
      this.Services.registrar(this.registro)
        // tslint:disable-next-line: deprecation
        .subscribe(resp => {
          console.log(resp);
        });

      f.reset();
  }

}
