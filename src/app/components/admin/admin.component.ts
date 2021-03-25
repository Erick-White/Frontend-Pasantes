import { SharedService } from './../../shared/shared';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Convocatorias } from '../../models/convocatorias';
import { ConvocatoriaService } from "../../services/convocatoria.service";
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { AdminService } from '../../services/admin.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  //Array donde se encuentran las Convocatoria
  convocatoriaArray: Convocatorias[] = [
  ];
  //Variable donde se agrega una nueva Convocatoria
  convito = new Convocatorias();

   _opened = true;

  constructor(private convocatoriaService: ConvocatoriaService, private router: Router, private sharedService : SharedService) { }


   _toggleSidebar(_opened : any) {
     console.log("Desde admin "+_opened);
    this._opened = _opened;

  }

  

  ngOnInit(): void {
    
    //Refrescar la pagina para mostrar una nueva Convocatoria
    this.convocatoriaService.refreshNeeded$.subscribe(()=>{
      this.getAllConvocatorias();
    });
    this.getAllConvocatorias();
    this.convito = new Convocatorias();
    


  }

  //Funcion para traer todas la Convocatoria
  private getAllConvocatorias(){

    this.convocatoriaService.convocatorias().subscribe(convoc => {this.convocatoriaArray = convoc
    },
      error =>{console.log(<any>error)
      });

  }

  //Guardar una nueva Convocatoria
  saveNew(){

    this.convocatoriaService.addNewConvocatoria(this.convito).subscribe(response =>{
      console.log(response);
      Swal.fire({
        icon: 'success',
        title: 'La Convocatoria ha sido Creada.',
        showConfirmButton: false,
        timer: 1500
      })
    },error =>{console.log(<any>error)
    })
    console.log(this.convito)
  }

}
