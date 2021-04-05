import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PasantesAll} from '../../models/pasantes-all';
import { Pasantes } from 'src/app/models/pasantes';
import { Convocatorias } from "../../models/convocatorias";
import { Equipos } from 'src/app/models/equipos';

import { ConvocatoriaService } from "../../services/convocatoria.service";
import { AdminService } from 'src/app/services/admin.service';
import { RolesService } from '../../services/roles.service';
import { EquiposService } from 'src/app/services/equipos.service';

import { RolesResponse } from 'src/app/models/Roles';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  pages = 1;

  _opened = true;

 
  // Informacion de los equipos en la Convocatoria
  convoEquipos: Convocatorias = new Convocatorias;

  //Array de las Equipos
  equiposArray: Equipos[] = [
  ];

  //Variable para traer Equipos
  equi: Equipos = new Equipos();


  public options: Object = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: false
  }

  convocatoriaId: number = 0;

  equipoId: number = 0;

  constructor(private activerouter: ActivatedRoute, private router: Router, private convocatoriaService: ConvocatoriaService,private admin: AdminService, private Roles : RolesService, private equiposService: EquiposService) { }

  ngOnInit(): void {

    //Variable para mostrar la Convocatoria en la que se encuentra
    this.convocatoriaId = +this.activerouter.snapshot.params['id'];
    //Servicio para traer la informacion de una sola Convocatoria
    this.convocatoriaService.getSingleConvocatoria(this.convocatoriaId).subscribe(data =>{
    this.convoEquipos = data;
    console.log(data)

  });

  // Servicio para refrescar las pagina al agregar uno Equipo
  this.equiposService.refreshNeeded$.subscribe(()=>{
    this.getAllEquipos();
  });
    this.getAllEquipos();
    this.equi = new Equipos();

  }

   //Nos trae todas las asignaciones por convocatoria
   private getAllEquipos(){

    this.equiposService.equipos(this.convocatoriaId).subscribe(equi => {this.equiposArray = equi
    this.equipoId = this.equi.idTeam
    console.log(this.equi)
    },
      error =>{console.log(<any>error)
      });
  }

  saveNewEquipo(){
    this.equi.idInternship = this.convocatoriaId;
    this.equiposService.addNewEquipos(this.equi).subscribe(response=>{
      console.log(response)
        Swal.fire({
          icon: 'success',
          title: 'El Equipo ha sido Creado.',
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
