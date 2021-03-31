import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Files } from '../../models/files';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  files: Files[] = [];
  constructor(private admin: AdminService) {
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';
   }
  _opened = true;
  ngOnInit(): void {
    this.GetFiles();
  }
  _toggleSidebar(_opened : any) {
    this._opened = _opened;

  }
  
  
  GetFiles() {
    console.log()
    this.admin.GetFiles().subscribe(res => {
      this.files = <Files[]>res
    })
  }
}
