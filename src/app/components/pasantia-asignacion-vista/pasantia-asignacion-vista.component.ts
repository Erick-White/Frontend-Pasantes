import { Component, OnInit } from '@angular/core';
import { Asignaciones } from "../../models/asignaciones";
import { AsignacionesService } from "../../services/asignaciones.service";
import {Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pasantia-asignacion-vista',
  templateUrl: './pasantia-asignacion-vista.component.html',
  styleUrls: ['./pasantia-asignacion-vista.component.css']
})
export class PasantiaAsignacionVistaComponent implements OnInit {

  //Informacion de la asignacion en la que se encuentra
  asigna: Asignaciones = new Asignaciones();

  constructor(private activerouter: ActivatedRoute, private router: Router, private asignacionesService: AsignacionesService, private location: Location) { }
  
  //Variable que guarda el Id de la asignacion
  asignacionId: number = 0;

  ngOnInit(): void {

    //Aqui se le pasa el Id a la variable
    this.asignacionId = +this.activerouter.snapshot.params['id'];

    //Servicio que nos trae la info de la Asignacion en la que nos encontramos
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


  //Funcion para confirmar la eliminacion de la asignacion
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
        this.router.navigate(['/admin',this.asigna.id_Internship])
      }
    })
  }

 //Funcion para eliminar Asignacion
  deleteAsig():void{
    this.asignacionesService.deleteAsignacion(this.asignacionId).subscribe(()=>{
    
    },error =>{console.log(<any>error)
    })
    
  }

  //Funcion para actualizar la Asignacion
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
