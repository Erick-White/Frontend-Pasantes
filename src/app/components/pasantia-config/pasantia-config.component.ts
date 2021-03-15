import { Component, OnInit } from '@angular/core';
import { Convocatorias } from "../../models/convocatorias";
import { ConvocatoriaService } from "../../services/convocatoria.service";
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pasantia-config',
  templateUrl: './pasantia-config.component.html',
  styleUrls: ['./pasantia-config.component.css']
})
export class PasantiaConfigComponent implements OnInit {

  convoConfig: Convocatorias = new Convocatorias;

  constructor(private activerouter: ActivatedRoute, private router: Router, private convocatoriaService: ConvocatoriaService) { }

  
  ngOnInit(): void {
    
    
    // let convocatoriaId = +this.activerouter.snapshot.paramMap.get('id');
    // this.convocatoriaService.getSingleConvocatoria(convocatoriaId).subscribe(data =>{
    //   this.convoConfig = data
    // })
  
  }

}