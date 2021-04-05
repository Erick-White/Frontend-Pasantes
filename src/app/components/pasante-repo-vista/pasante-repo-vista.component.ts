import { FilesAll } from './../../models/FilesAll';
import { FilesService } from './../../services/files.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pasante-repo-vista',
  templateUrl: './pasante-repo-vista.component.html',
  styleUrls: ['./pasante-repo-vista.component.css']
})
export class PasanteRepoVistaComponent implements OnInit {

  _opened = true;
  _idAsignacion = 0;
  filesInfo: FilesAll[] = [];
  pdfUrl = "";

  constructor(private activerouter: ActivatedRoute, private router: Router, private _filesService: FilesService) { }

   _toggleSidebar(_opened : any) {
    this._opened = _opened;

  }


  ngOnInit(): void {

    this._idAsignacion = +this.activerouter.snapshot.params['id'];
    console.log(this._idAsignacion);
    this._filesService.GetFilesAndAssigments(this._idAsignacion).subscribe(
      response => {
        this.filesInfo = response;
        
        console.log(response);

      },
      error => {
        console.log(error);
      }
    );



  }





}
