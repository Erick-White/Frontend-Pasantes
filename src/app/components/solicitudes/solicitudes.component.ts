import { Component, OnInit } from '@angular/core';
import { Pasantes } from 'src/app/models/pasantes';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public pasantes: Pasantes[] = [
  
    
]


}
