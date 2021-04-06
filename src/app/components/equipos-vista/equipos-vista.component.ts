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
  selector: 'app-equipos-vista',
  templateUrl: './equipos-vista.component.html',
  styleUrls: ['./equipos-vista.component.css']
})
export class EquiposVistaComponent implements OnInit {
  pasantes: PasantesAll[] = [];
  //Informacion de los Equipos
  equi: Equipos = new Equipos();

  _opened = true;

  constructor(private activerouter: ActivatedRoute, private router: Router, private convocatoriaService: ConvocatoriaService,private admin: AdminService, private Roles : RolesService, private equiposService: EquiposService) { }

  equipoId: number = 0;

  _toggleSidebar(_opened : any) {
    this._opened = _opened;

  }

  ngOnInit(): void {

    this.equipoId = +this.activerouter.snapshot.params['id']

    this.equiposService.getSingleEquipo(this.equipoId).subscribe(response =>{
      this.equi = response
    })

    this.GetAllPasantes();
  }

  //Funcion para confirmar la eliminacion de la equipo
  confirmBox(){
    Swal.fire({
      title: 'Seguro que quieres borrar la Convocatoria?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText:'Cancelar',
      confirmButtonText: 'Si, Eliminalo!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        this.deleteAsig();
        this.router.navigate(['/equipos/',this.equi.idInternship])
        
        Swal.fire(
          'Borrado!',
          'El Equipo ha sido Borrado.',
          'success'
        )
        
      }
    })
  }

  //Funcion para eliminar Equipo
  deleteAsig():void{
    this.equiposService.deleteEquipo(this.equipoId).subscribe(()=>{
    
    },error =>{console.log(<any>error)
    })
    
  }

  //Funcion para actualizar la Equipo
  updateInfo():void{
    this.equiposService.updateEquipo(this.equi,this.equipoId).subscribe(()=>{
      this.router.navigate(['/equipos/',this.equi.idInternship])
    },error =>{console.log(<any>error)
    })
    Swal.fire({
      icon: 'success',
      title: 'Los Cambios han sido Guardados.',
      showConfirmButton: false,
      timer: 1500
    })
  }

  GetAllPasantes() {
    this.admin.getAllPasantes().subscribe(resp => {
      this.pasantes = <PasantesAll[]>resp
      

    })
  }
}
