import { Component, OnInit } from '@angular/core';
import { Convocatorias } from "../../models/convocatorias";
import { Asignaciones } from "../../models/asignaciones";
import { ConvocatoriaService } from "../../services/convocatoria.service";
import { AsignacionesService } from "../../services/asignaciones.service";
import {Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pasantia-asignacion-vista',
  templateUrl: './pasantia-asignacion-vista.component.html',
  styleUrls: ['./pasantia-asignacion-vista.component.css']
})
export class PasantiaAsignacionVistaComponent implements OnInit {

  asigna: Asignaciones = new Asignaciones()

  constructor(private activerouter: ActivatedRoute, private router: Router, private asignacionesService: AsignacionesService, private convocatoriaService: ConvocatoriaService) { }

  asignacionId: number = 0;

  ngOnInit(): void {

    this.asignacionId = +this.activerouter.snapshot.params['id'];
    this.asignacionesService.getSingleAsignacion(this.asignacionId).subscribe(data =>{
      this.asigna = data
      if(data.limitDate)  {
        const limitDate = new Date(data.limitDate )
        const month = limitDate.getMonth() + 1;
        const day = limitDate.getDate();
        const year = limitDate.getFullYear();
        this.asigna.limitDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}` 
      }
    })
    
  }


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
        Swal.fire(
          'Borrado!',
          'La Asignacion ha sido Borrada.',
          'success'
        )
      }
    })
  }

  deleteAsig():void{
    this.asignacionesService.deleteAsignacion(this.asignacionId).subscribe(()=>{
      this.router.navigate(['/admin/',this.asigna.id_Internship])
    },error =>{console.log(<any>error)
    })
  }

  updateInfo():void{
    this.asignacionesService.updateAsig(this.asigna,this.asignacionId).subscribe(()=>{
      this.router.navigate(['/admin/',this.asigna.id_Internship])
    },error =>{console.log(<any>error)
    })
    Swal.fire({
      icon: 'success',
      title: 'Los Cambios han sido Guardados.',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
