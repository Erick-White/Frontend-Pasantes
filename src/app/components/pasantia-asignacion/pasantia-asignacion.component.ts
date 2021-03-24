import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';

import { Convocatorias } from "../../models/convocatorias";
import { Asignaciones } from "../../models/asignaciones";
import { ConvocatoriaService } from "../../services/convocatoria.service";
import { AsignacionesService } from "../../services/asignaciones.service";

import Swal from 'sweetalert2';
@Component({
  selector: 'app-pasantia-asignacion',
  templateUrl: './pasantia-asignacion.component.html',
  styleUrls: ['./pasantia-asignacion.component.css']
})
export class PasantiaAsignacionComponent implements OnInit {

  // Informacion de la Pasantia en la que se encuetra
  convoAsig: Convocatorias = new Convocatorias;

  //Array de las Asignaciones
  asignacionesArray: Asignaciones[] = [
  ];

  //Variable para traer Asignaciones
  asigna: Asignaciones = new Asignaciones()


  constructor(private activerouter: ActivatedRoute, private router: Router, private convocatoriaService: ConvocatoriaService, private asignacionesService: AsignacionesService) { }

  convocatoriaId: number = 0;
  
  asignacionId: number = 0;

  counter = 0;
  

  ngOnInit(): void {

    
      this.convocatoriaId = +this.activerouter.snapshot.params['id'];
      this.convocatoriaService.getSingleConvocatoria(this.convocatoriaId).subscribe(data =>{
      this.convoAsig = data;
      this.internLimit;
      console.log(data)
      
    });

    this.asignacionesService.refreshNeeded$.subscribe(
      response =>{
        this.getAllAsignaciones();
      });
    this.getAllAsignaciones();
    
  }

  internLimit(){
    if(this.counter === this.convoAsig.intern_limit){
      console.log("No mas pasantes")
    }else{
      this.counter++;
    }
  }

  //Nos trae todas las asignaciones por convocatoria
  private getAllAsignaciones(){

    this.asignacionesService.asignaciones(this.convocatoriaId).subscribe(asign => {this.asignacionesArray = asign
    console.log(asign)
    },
      error =>{console.log(<any>error)
      });
      console.log(this.asigna.id_Assignment)
  }

  //Nos guarda las asignaciones creadas
  saveNewAsigna(){
    this.asigna.id_Internship = this.convocatoriaId;
    this.asignacionesService.addNewAsignacion(this.asigna).subscribe(
      response => {
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
//Borrar Asignacion
  deleteAsig():void{
    this.asignacionesService.deleteAsignacion(this.asignacionId).subscribe(()=>{

    })
  }
//Actualizar Asignacion
  updateInfo():void{
    this.asignacionesService.updateAsig(this.asigna,this.asignacionId).subscribe(()=>{

    })
  }

}


