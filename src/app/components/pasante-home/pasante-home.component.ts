import { Component, OnInit } from '@angular/core';
import { Convocatorias } from "../../models/convocatorias";
import { Asignaciones } from "../../models/asignaciones";
import { ConvocatoriaService } from "../../services/convocatoria.service";
import { AsignacionesService } from "../../services/asignaciones.service";
import {Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { PasantesService } from 'src/app/services/pasantes.service';

@Component({
  selector: 'app-pasante-home',
  templateUrl: './pasante-home.component.html',
  styleUrls: ['./pasante-home.component.css']
})



export class PasanteHomeComponent implements OnInit {

  //Informacion de la Pasantia en la que se encuetra
  convoAsig: Convocatorias = new Convocatorias;

  //Array de las Asignaciones
  asignacionesArray: Asignaciones[] = [
  ];

  //Variable para traer Asignaciones
  asigna = new Asignaciones()

  constructor(private activerouter: ActivatedRoute, private router: Router, private convocatoriaService: ConvocatoriaService
    , private asignacionesService: AsignacionesService) { }

  // convocatoriaId: number = 0;

  ngOnInit(): void {

    //   this.convocatoriaId = +this.activerouter.snapshot.params['id'];
    //   this.convocatoriaService.getSingleConvocatoria(this.convocatoriaId).subscribe(data =>{
    //   this.convoAsig = data;
    //   console.log(data)
      
    // });


    this.asignacionesService.refreshNeeded$.subscribe(
      response =>{
        this.getAllAsignaciones();
      });
    this.getAllAsignaciones();
  }

   //Nos trae todas las asignaciones por convocatoria
   private getAllAsignaciones(){

    this.asignacionesService.asignacion().subscribe(asign => {this.asignacionesArray = asign
    console.log(asign)
    },
      error =>{console.log(<any>error)
      });
      console.log(this.asigna.id_Assignment)
  }

  

}
