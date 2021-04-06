import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterResponse } from 'src/app/models/registro';
import { PasantesService } from '../../services/pasantes.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registro = new RegisterResponse();

  constructor(private Services: PasantesService,private router:Router) { }

  ngOnInit(): void {
   // this.registro = new RegisterResponse();
  }

  // tslint:disable-next-line: typedef
  onSubmit(f: NgForm){
    this.Services.registrar(this.registro)
      // tslint:disable-next-line: deprecation
      .subscribe(resp => {
        console.log(resp);
        
        Swal.fire({
          icon: 'success',
          title: 'Se envio correctamente',
          text: 'Le enviaremos una notificacion por correo, si fue admitido',
          showConfirmButton: true
        });


        this.router.navigate(['/login']);

      }, error =>{
          Swal.fire({
            icon: 'error',
            title: 'No hay pasantias activas',
            text: 'Le notificaremos cuando este disponible'
          });

        this.router.navigateByUrl('https://ailogicinternship.azurewebsites.net/');
      });
    
      f.reset();
    
}

}
