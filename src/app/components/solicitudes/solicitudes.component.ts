import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';

import { first } from 'rxjs/operators';
import { Pasantes } from 'src/app/models/pasantes';
import { PasantesService } from 'src/app/services/pasantes.service';
import { Convocatorias } from '../../models/convocatorias';
import { ConvocatoriaService } from "../../services/convocatoria.service";
import { Observable, interval, Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

 pasante: Pasantes[] = [];
 loading = false;
 pasantes  = new Pasantes();
 pages = 1;
 
 counter = 0;

 

// Informacion de la Pasantia en la que se encuetra
convoPasantes: Convocatorias = new Convocatorias;

_opened = true;

  // tslint:disable-next-line: new-parens

  // pasants: Pasantes = new Pasantes();

  /*pasants: Pasantes = {
    idRequestInternship: '12',
    name: 'Roman',
    lastname: 'Alcantara',
    cedula: '123-1234567-1',
    phone: '111-111-1111',
    github: 'asegesa12',
    linkedin: 'asegesa12',
    cv: 'stackoverflow',
    birthDate: '2021-03-15T13:36:34.705Z',
    email: 'Roman@gmail.com'

}*/

  // tslint:disable-next-line: new-parens


  constructor(private Services: PasantesService, private activerouter: ActivatedRoute, private router: Router, private convocatoriaService: ConvocatoriaService) { }

  convocatoriaId: number = 0;

  _toggleSidebar(_opened : any) {
    this._opened = _opened;

  }
  





  
  ngOnInit(): void {

    //Variable para mostrar la Convocatoria en la que se encuentra
    this.convocatoriaId = +this.activerouter.snapshot.params['id'];

    //Servicio para traer la informacion de una sola Convocatoria
    this.convocatoriaService.getSingleConvocatoria(this.convocatoriaId).subscribe(data =>{
    this.convoPasantes = data;
  });


    // tslint:disable-next-line: deprecation
    //  this.updateSubscription = interval(1000).subscribe(
    //    (val) => {
    //     this.getAll();
    //     console.log(val);
    //   }
    // );

      // this.Services.refreshNeeded$.subscribe(
      //   resp => {
      //     this.getAll();

      //   }
      // );

      this.loading = true;
      this.getAll();



  }

  // tslint:disable-next-line: typedef

  // tslint:disable-next-line: typedef
  private getAll(){
    this.Services.solicitudes()
      .subscribe(resp => {
        // tslint:disable-next-line: semicolon
        this.pasante = (resp as Pasantes[]);
        this.loading = false;
        if(this.convoPasantes.intern_limit == this.counter){
         return;
        }
        console.log(this.convoPasantes.intern_limit)

      });

    // console.log(this.pasante);
  }

  // tslint:disable-next-line: typedef


  // tslint:disable-next-line: typedef
  borrar(id: string) {
    const user = this.pasante.find(x => x.idRequestInternship === id);
    console.log(user);
    if (!user) { return; }

    this.Services.borrar(id)
          .pipe(first())
          // tslint:disable-next-line: deprecation
          .subscribe(() => this.pasante = this.pasante.filter(x => x.idRequestInternship !== id));
    console.log(id);
    //window.location.reload()







  }

    Update(id: string) {
    const user = this.pasante.find(x => x.idRequestInternship === id);
    console.log(user);
    let userToSend = new Object();
    userToSend = {
     name: user?.name,
     lastname: user?.lastname,
     cedula: user?.cedula,
    phone: user?.phone,
    github: user?.github,
    linkedin: user?.linkedin,
    cv: user?.cv,
    birthDate: user?.birthDate,
    email: user?.email
   };

    Swal.fire({
        title: 'Esta Seguro?',
        text: `Esta seguro de aceptar a: ${user?.name} ${ user?.lastname}`,
        icon: 'question',
        showConfirmButton: true,
        confirmButtonText:"Si",
        showCancelButton: true
      }).then(resp => {
        if (resp.value){
          if (!user) { return; }
          this.Services.AcceptIntern(userToSend)

            .pipe(first())
            // tslint:disable-next-line: deprecation
            .subscribe(() => this.pasante = this.pasante.filter(x => x.idRequestInternship !== id));


            this.counter++
            console.log(this.counter)
            this.borrar(id);

        }
      });




  }

  // tslint:disable-next-line: typedef
  /*onSubmit(f: NgForm){
     console.log(this.pasante);
     this.Services.aceptar(this.pasantes)
        // tslint:disable-next-line: deprecation
         .subscribe(resp => {
           console.log(resp);
         });


  }*/




}
