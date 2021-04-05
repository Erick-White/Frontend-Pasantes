import { AsignacionesService } from './../../services/asignaciones.service';
import { Component, OnInit } from '@angular/core';
import { Asignaciones } from 'src/app/models/asignaciones';

@Component({
  selector: 'app-pasante-asignaciones',
  templateUrl: './pasante-asignaciones.component.html',
  styleUrls: ['./pasante-asignaciones.component.css']
})
export class PasanteAsignacionesComponent implements OnInit {

  _opened = true;
   asignacionesArray: Asignaciones[] = [];
  //Variable para traer Asignaciones
  asignacion: Asignaciones = new Asignaciones();

  constructor(private _asignacionesService : AsignacionesService) {

   }


    _toggleSidebar(_opened : any) {
    this._opened = _opened;

  }


  ngOnInit(): void {
    this._asignacionesService.refreshNeeded$.subscribe(
      response =>{
        this.getAllAsignaciones();
      });
    this.getAllAsignaciones();

  }

  private getAllAsignaciones(){

    this._asignacionesService.asignacion().subscribe(asign => {this.asignacionesArray = asign
    console.log(asign)
    },
      error =>{console.log(<any>error)
      });
  }



}
