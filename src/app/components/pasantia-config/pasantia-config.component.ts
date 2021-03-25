import { Component, OnInit } from '@angular/core';
import { Convocatorias } from "../../models/convocatorias";
import { ConvocatoriaService } from "../../services/convocatoria.service";
import {Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pasantia-config',
  templateUrl: './pasantia-config.component.html',
  styleUrls: ['./pasantia-config.component.css']
})
export class PasantiaConfigComponent implements OnInit {

  //Informacion de la convocatoria en la que se encuentra
  convoConfig: Convocatorias = new Convocatorias();
  

  constructor(private activerouter: ActivatedRoute, private router: Router, private convocatoriaService: ConvocatoriaService) { }

  //Variable que guarda el Id de la convocatoria
   convocatoriaId: number = 0;
  
  ngOnInit(): void {
    
    //Aqui se le pasa el Id a la variable
    this.convocatoriaId = +this.activerouter.snapshot.params['id']
    
    //Servicio que nos trae la info de la Asignacion en la que nos encontramos
    this.convocatoriaService.getSingleConvocatoria(this.convocatoriaId).subscribe(data =>{
      this.convoConfig = data
      if(data.initial_date) {
        const initialDate = new Date(data.initial_date)
        const month = initialDate.getMonth() + 1;
        const day = initialDate.getDate();
        const year = initialDate.getFullYear();
        this.convoConfig.initial_date = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}` 
      }
      
      if(data.final_date) {
        const finalDate = new Date(data.final_date)
        const month = finalDate.getMonth() + 1;
        const day = finalDate.getDate();
        const year = finalDate.getFullYear();
        this.convoConfig.final_date = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`  
      }
      
    })
  
  }

  //Funcion para actualizar la Convocatoria
  updateInfo():void{
    this.convocatoriaService.updateConvo(this.convoConfig,this.convocatoriaId).subscribe(() =>{
      this.router.navigate(['/admin/'+this.convocatoriaId])
    },
    error =>{console.log(<any>error)
    })
    Swal.fire({
      icon: 'success',
      title: 'Los Cambios han sido Guardados.',
      showConfirmButton: false,
      timer: 1500
    })
    
  }

  //Funcion para confirmar la eliminacion de la Convocatoria 
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
        this.deleteConvo();
        Swal.fire(
          'Borrado!',
          'La Convocatoria ha sido Borrada.',
          'success'
        )
        this.router.navigate(['/admin']).then(() => {
        });
      }
    })
  }

  //Funcion para eliminar Asignacion
  deleteConvo():void{
    this.convocatoriaService.deleteConvo(this.convocatoriaId).subscribe(()=>{
    })

    

  }

  

}