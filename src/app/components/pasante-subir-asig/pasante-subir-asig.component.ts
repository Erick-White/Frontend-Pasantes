import { Component, OnInit } from '@angular/core';
import { Asignaciones } from "../../models/asignaciones";
import { AsignacionesService } from "../../services/asignaciones.service";
import {Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-pasante-subir-asig',
  templateUrl: './pasante-subir-asig.component.html',
  styleUrls: ['./pasante-subir-asig.component.css']
})
export class PasanteSubirAsigComponent implements OnInit {

  asigna: Asignaciones = new Asignaciones();

  constructor(private activerouter: ActivatedRoute, private router: Router, private asignacionesService: AsignacionesService) { }

  asignacionId: number = 0;

  currentDate = new Date;
  

  buttonDisable : boolean = false;

  ngOnInit(): void {
    this.asignacionId = +this.activerouter.snapshot.params['id'];
    this.asignacionesService.getSingleAsignacion(this.asignacionId).subscribe(data =>{
      this.asigna = data
      if(data.limitDate){
        const limitDate = new Date(data.limitDate)
        const month = limitDate.getMonth() + 1;
        const day = limitDate.getDate();
        const year = limitDate.getFullYear();
        this.asigna.limitDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}` 
        
        if(this.currentDate > limitDate){
          this.buttonDisable = true
        }
      }
       
    })

  }

}
