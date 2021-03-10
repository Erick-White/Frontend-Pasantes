import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Convocatoria} from '../../models/convocatoria';
import { ConvocatoriaService } from "../../services/convocatoria.service";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  convocatoriaArray: Convocatoria[] = [
  ];

  convito = new Convocatoria();



  constructor(private convocatoriaService: ConvocatoriaService) { }

  ngOnInit(): void {
    
    this.convocatoriaService.convocatorias().subscribe(convoc => this.convocatoriaArray = convoc)
    this.convito = new Convocatoria();
  }

  saveNew(form: NgForm){

    this.convocatoriaService.addNewConvocatoria(this.convito).subscribe(response =>{
      console.log(response);
      console.log(this.convito);
    },error =>{console.log(<any>error)
    })
    form.resetForm(this);

  }

}