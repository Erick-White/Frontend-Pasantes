import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { Files } from '../../models/files';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  public previsualizacion: string = "";
  public archivos: any = [];  
  file: Files = {
    idUser:"",
   file: "",
  };
  constructor(private http:HttpClient,private sanitizer:DomSanitizer) {
     
  }
  
  ngOnInit() {
    
  }
  capturarFile(event: any) {
    const archivoCapturado = event.target.files[0];
    // this.extraerBase64(archivoCapturado).then((imagen: any) => {
    //   this.previsualizacion = imagen.base;
    //   console.log(imagen);
    // })
    this.archivos.push(archivoCapturado);
  }
  
  subirArchivo(form: NgForm) {
    const formularioDatos = new FormData();
    this.archivos.forEach((archivo: any) => {
      console.log(archivo);
      formularioDatos.append('file', archivo);
      
    })
   
    this.http.post('https://ailogicinternship.azurewebsites.net/api/Files', formularioDatos).subscribe(res => {
      console.log("Respuesta", res);
    })
  }
}
