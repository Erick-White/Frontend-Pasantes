import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { SharedService } from './../../shared/shared';

import { Convocatorias } from "../../models/convocatorias";
import { Asignaciones } from "../../models/asignaciones";
import { ConvocatoriaService } from "../../services/convocatoria.service";
import { AsignacionesService } from "../../services/asignaciones.service";

import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-pasantia-asignacion',
  templateUrl: './pasantia-asignacion.component.html',
  styleUrls: ['./pasantia-asignacion.component.css']
})
export class PasantiaAsignacionComponent implements OnInit {

  pages = 1;

  _opened = true;

  // Informacion de la Pasantia en la que se encuetra
  convoAsig: Convocatorias = new Convocatorias;

  //Array de las Asignaciones
  asignacionesArray: Asignaciones[] = [
  ];

  //Variable para traer Asignaciones
  asigna: Asignaciones = new Asignaciones();

  public options: Object = {
  placeholderText: 'Edit Your Content Here!',
  charCounterCount: false
}


  constructor(private activerouter: ActivatedRoute, private router: Router, private convocatoriaService: ConvocatoriaService, private asignacionesService: AsignacionesService, private sharedService : SharedService) { }



  convocatoriaId: number = 0;

  asignacionId: number = 0;


  ngOnInit(): void {


      //Variable para mostrar la Convocatoria en la que se encuentra
      this.convocatoriaId = +this.activerouter.snapshot.params['id'];
      //Servicio para traer la informacion de una sola Convocatoria
      this.convocatoriaService.getSingleConvocatoria(this.convocatoriaId).subscribe(data =>{
      this.convoAsig = data;
      // this.internLimit;
      console.log(data)

    });

    // Servicio para refrescar las pagina al agregar una nueva asignacion
    this.asignacionesService.refreshNeeded$.subscribe(()=>{
        this.getAllAsignaciones();
      });
        this.getAllAsignaciones();
        this.asigna = new Asignaciones();

  }

  //Nos trae todas las asignaciones por convocatoria
  private getAllAsignaciones(){

    this.asignacionesService.asignaciones(this.convocatoriaId).subscribe(asign => {this.asignacionesArray = asign
    },
      error =>{console.log(<any>error)
      });
  }

  //Nos guarda las asignaciones creadas
  saveNewAsigna(){
    this.asigna.id_Internship = this.convocatoriaId;
    this.asignacionesService.addNewAsignacion(this.asigna).subscribe(response=>{
      console.log(response)
        Swal.fire({
          icon: 'success',
          title: 'La Asignacion ha sido Creada.',
          showConfirmButton: false,
          timer: 1500
          
        })
      },
      error =>{
        console.log(<any>error)
      });

  }

  _toggleSidebar(_opened : any) {
    this._opened = _opened;
  }


}


