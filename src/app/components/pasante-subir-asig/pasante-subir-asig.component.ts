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

  ngOnInit(): void {
    this.asignacionId = +this.activerouter.snapshot.params['id'];
    this.asignacionesService.getSingleAsignacion(this.asignacionId).subscribe(data =>{
      this.asigna = data
    })

  }

}
