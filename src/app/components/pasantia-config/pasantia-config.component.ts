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

  deleteConvo():void{
    this.convocatoriaService.deleteConvo(this.convocatoriaId).subscribe(()=>{
    })

    this.router.navigate(['/admin'])

  }

  

}