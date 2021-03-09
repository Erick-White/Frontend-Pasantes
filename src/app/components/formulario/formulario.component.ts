import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  usuario: User = new User;
  recordar = false;

  constructor(private Services: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.usuario = new User();
  }

  // tslint:disable-next-line: typedef
  onSubmit(form: NgForm) {

    if (form.invalid) { return; }

    console.log(this.usuario);
    console.log(form);



    // tslint:disable-next-line: deprecation
    this.Services.register(this.usuario).subscribe(resp => {
      console.log(resp);

      this.router.navigateByUrl('/admin');


    });
  }


}
