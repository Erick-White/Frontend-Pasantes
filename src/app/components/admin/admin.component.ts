import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Convocatorias } from '../../models/convocatorias';
import { ConvocatoriaService } from "../../services/convocatoria.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  convocatoriaArray: Convocatorias[] = [
  ];

  convito = new Convocatorias();



  constructor(private convocatoriaService: ConvocatoriaService, private router: Router) { }

  ngOnInit(): void {

    this.convocatoriaService.refreshNeeded$.subscribe(()=>{
      this.getAllConvocatorias();
    });

    this.getAllConvocatorias();
    
    this.convito = new Convocatorias();
  }

  private getAllConvocatorias(){
    this.convocatoriaService.convocatorias().subscribe(convoc => {this.convocatoriaArray = convoc},
      error =>{console.log(<any>error)
      });
  }

  saveNew(){

    this.convocatoriaService.addNewConvocatoria(this.convito).subscribe(response =>{
      console.log(response);
      console.log(this.convito);
    },error =>{console.log(<any>error)
    })

  }

}