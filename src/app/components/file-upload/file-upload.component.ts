import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';




@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  public previsualizacion: string = "";
  public archivos: any = "";
  uploadForm: FormGroup | any;
  userEmail: string | Blob = "";

  constructor(private http:HttpClient, private formBuilder: FormBuilder) {

  }

  ngOnInit() {


    this.userEmail = localStorage.getItem('email')!;
  }

    capturarFile(event : any) {
    const archivoCapturado = event.target.files[0];
    console.log(archivoCapturado);
    this.archivos = archivoCapturado;


      }

  // capturarFile(event: any) {
  //   const archivoCapturado = event.target.files[0];
  //   // this.extraerBase64(archivoCapturado).then((imagen: any) => {
  //   //   this.previsualizacion = imagen.base;
  //   //   console.log(imagen);
  //   // })
  //   this.archivos.push(archivoCapturado);
  // }

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

    
  }
}
