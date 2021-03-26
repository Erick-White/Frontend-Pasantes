import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admin-files',
  templateUrl: './admin-files.component.html',
  styleUrls: ['./admin-files.component.css']
})
export class AdminFilesComponent implements OnInit {
  public previsualizacion: string = "";
  public archivos: any = "";
  userEmail: string | Blob = "";
  _opened = true;
  buttonDisable : boolean = false;
  constructor(private activerouter: ActivatedRoute, private router: Router,private http:HttpClient,) { }

  ngOnInit(): void {

    this.userEmail = localStorage.getItem('email')!;
  }
  
  _toggleSidebar(_opened : any) {
    this._opened = _opened;

  }
  

  capturarFile(event : any) {
    const archivoCapturado = event.target.files[0];
    console.log(archivoCapturado);
    this.archivos = archivoCapturado;
  }


  subirArchivo(): any {
    const formularioDatos = new FormData();
    formularioDatos.append('EmailUser', this.userEmail);

        formularioDatos.append('File' , this.archivos);
        console.log(this.archivos);

    //  const header = new HttpHeaders().set('Content-Type', 'multipart/form-data');
    this.http.post('https://ailogicinternship.azurewebsites.net/api/Files', formularioDatos )
    .subscribe(res => {
      console.log(res);
    },error => {
      console.log(error);
    });

    this.router.navigate(['/admin'])

  }
}
