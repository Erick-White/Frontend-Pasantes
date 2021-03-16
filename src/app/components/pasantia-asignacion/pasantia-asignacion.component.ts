import { Component, OnInit } from '@angular/core';
import { Convocatorias } from "../../models/convocatorias";
import { ConvocatoriaService } from "../../services/convocatoria.service";
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pasantia-asignacion',
  templateUrl: './pasantia-asignacion.component.html',
  styleUrls: ['./pasantia-asignacion.component.css']
})
export class PasantiaAsignacionComponent implements OnInit {

  convoAsig: Convocatorias = new Convocatorias;

  constructor(private activerouter: ActivatedRoute, private router: Router, private convocatoriaService: ConvocatoriaService) { }

  ngOnInit(): void {

    let convocatoriaId = +this.activerouter.snapshot.params['id']
    
    this.convocatoriaService.getSingleConvocatoria(convocatoriaId).subscribe(data =>{
      this.convoAsig = data
    })

  }



}
