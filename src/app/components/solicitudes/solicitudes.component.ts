import { Component, OnInit } from '@angular/core';
import { Pasantes } from 'src/app/models/pasantes';
import { PasantesService } from 'src/app/services/pasantes.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

 pasante : Pasantes[] = [];
  constructor(private Services : PasantesService) { }

  ngOnInit(): void {

    this.Services.solicitudes()
      // tslint:disable-next-line: deprecation
      .subscribe(resp => {
        this.pasante = resp;
        console.log(resp);
      });
  }




}
