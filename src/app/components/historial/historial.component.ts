import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Files } from '../../models/files';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  files: Files[] = [];
  constructor(private admin: AdminService) {
   
   }
  _opened = true;
  ngOnInit(): void {
    this.GetFiles();
  }
  _toggleSidebar(_opened : any) {
    this._opened = _opened;

  }
  pdfSource =  "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  
  GetFiles() {
    this.admin.GetFiles().subscribe(res => {
      this.files = <Files[]>res
    })
    
  }
}
