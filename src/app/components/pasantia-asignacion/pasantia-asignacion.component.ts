import { Component, OnInit } from '@angular/core';
import { Convocatorias } from "../../models/convocatorias";
import { Asignaciones } from "../../models/asignaciones";
import { ConvocatoriaService } from "../../services/convocatoria.service";
import { AsignacionesService } from "../../services/asignaciones.service";
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pasantia-asignacion',
  templateUrl: './pasantia-asignacion.component.html',
  styleUrls: ['./pasantia-asignacion.component.css']
})
export class PasantiaAsignacionComponent implements OnInit {

  // Informacion de la Pasantia en la que se encuetra
  convoAsig: Convocatorias = new Convocatorias;

  asignacionesArray: Asignaciones[] = [
  ];

  asigna = new Asignaciones();


  constructor(private activerouter: ActivatedRoute, private router: Router, private convocatoriaService: ConvocatoriaService, private asignacionesService: AsignacionesService) { }

  ngOnInit(): void {

    let convocatoriaId = +this.activerouter.snapshot.params['id']
    
    this.convocatoriaService.getSingleConvocatoria(convocatoriaId).subscribe(data =>{
      this.convoAsig = data
    })

    this.asignacionesService.refreshNeeded$.subscribe(()=>{
      this.getAllAsignaciones();
    });
    this.getAllAsignaciones();

  }

  private getAllAsignaciones(){

    this.asignacionesService.asignaciones().subscribe(asign => {this.asignacionesArray = asign },
      error =>{console.log(<any>error)
      });
      
  }

saveNewAsigna(){

    this.asignacionesService.addNewAsignacion(this.asigna).subscribe(response =>{
      console.log(response);
      console.log(this.asigna);
    },error =>{console.log(<any>error)
    })

  }



}
