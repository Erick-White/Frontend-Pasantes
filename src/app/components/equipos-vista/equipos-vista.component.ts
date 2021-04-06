import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PasantesAll} from '../../models/pasantes-all';
import { Pasantes } from 'src/app/models/pasantes';
import { Pasantes2 } from "../../models/pasantes2";
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
 
  //Informacion de los Equipos
  equi: Equipos = new Equipos();
  
  //Array de Pasantes
  pasantes: PasantesAll[]=[];

  //Info del Pasante
  pasante = new Pasantes();

  pasante2: Pasantes2[]=[];

  pasantee: any;


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

    this.getPasantesPorEquipo();
    



  }

  //Traer Pasantes del Equipo
  getPasantesPorEquipo(){
    this.equiposService.pasantePorEquipos(this.equipoId).subscribe( pas =>{
      this.pasante2 = pas
    })
  }

  //Traer todos los Pasantes
  GetAllPasantes() {
    this.admin.getAllPasantes().subscribe(resp => {
      this.pasantes = <PasantesAll[]>resp
    })
  }

  //Obtener los pasantes ByID
  GetPansantesById(id: string) {
    this.activerouter.paramMap.subscribe(res => {
      this.admin.getPasantesById(res.get('id')).subscribe(pasant => {
       this.pasantee = pasant.idInternt;
       console.log(this.pasantee)
      
     })
   })

  }

  //Funcion para confirmar la eliminacion de la equipo
  confirmBox(){
    Swal.fire({
      title: 'Seguro que quieres borrar El Equipo?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText:'Cancelar',
      confirmButtonText: 'Si, Eliminalo!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        this.deleteEquipo();
        this.router.navigate(['/equipos/',this.equi.idInternship])
        
        Swal.fire(
          'Borrado!',
          'El Equipo ha sido Borrado.',
          'success'
        )
        
      }
    })
  }

  //Funcion para confirmar la eliminacion de Pasante del Equipo
  confirmBox2(){
    Swal.fire({
      title: 'Seguro que quieres remover pasante del equipo?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText:'Cancelar',
      confirmButtonText: 'Si, Remuevelo!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        this.deletePasanteDeEquipo();
        this.router.navigate(['/equipos-vista/',this.equi.idTeam])
        
        Swal.fire(
          'Borrado!',
          'El Pasante ha sido Removido del Equipo.',
          'success'
        )
        
      }
    })
  }

  //Funcion para eliminar Equipo
  deleteEquipo():void{
    this.equiposService.deleteEquipo(this.equipoId).subscribe(()=>{
    
    },error =>{console.log(<any>error)
    })
    
  }

  deletePasanteDeEquipo():void{
    this.equiposService.deletePasante(this.pasantee).subscribe(()=>{

    },error =>{console.log(<any>error)
    })
  }

  //Funcion para actualizar la Equipo
  updateInfo():void{
    this.equiposService.updateEquipo(this.equi,this.equipoId).subscribe(()=>{
      this.router.navigate(['/equipos-vista/',this.equi.idTeam])
    },error =>{console.log(<any>error)
    })

    this.equiposService.addNewPasanteEnEquipo(this.equi).subscribe(()=>{
      
    })
    Swal.fire({
      icon: 'success',
      title: 'Los Cambios han sido Guardados.',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
