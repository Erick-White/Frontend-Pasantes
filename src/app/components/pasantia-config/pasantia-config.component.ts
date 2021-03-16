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

  convoConfig: Convocatorias = new Convocatorias;
  
  con = new Convocatorias();

  constructor(private activerouter: ActivatedRoute, private router: Router, private convocatoriaService: ConvocatoriaService) { }

   convocatoriaId: number = 0;
  
  ngOnInit(): void {
    
    
    this.convocatoriaId = +this.activerouter.snapshot.params['id']
    
    this.convocatoriaService.getSingleConvocatoria(this.convocatoriaId).subscribe(data =>{
      this.convoConfig = data
    })
  
  }
  

  updateInfo():void{
    this.convocatoriaService.updateConvo(this.con,this.convocatoriaId).subscribe(() =>{
      this.router.navigate(['/admin'])
    },
    error =>{console.log(<any>error)
    })
  }

  confirmBox(){
    Swal.fire({
      title: 'Seguro que quiere borrar la Convocatoria?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteConvo();
        Swal.fire(
          'Borrado!',
          'La Convocatoria ha sido Borrada.',
          'success'
        )
      }
    })
  }

  deleteConvo():void{
    this.convocatoriaService.deleteConvo(this.convocatoriaId).subscribe(()=>{
    })

    this.router.navigate(['/admin'])

  }

  

}