import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  public archivos: any = [];
  uploadForm: FormGroup | any;
  userEmail: string | Blob = "";

  constructor(private http:HttpClient, private formBuilder: FormBuilder) {

  }



  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      EmailUser:[''],
      File: ['']
    });

    this.userEmail = localStorage.getItem('email')!;
  }

    capturarFile(event : any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.patchValue({
          File: file
      });
      this.uploadForm.get('File').updateValueAndValidity();    }
    }
  // capturarFile(event: any) {
  //   const archivoCapturado = event.target.files[0];
  //   // this.extraerBase64(archivoCapturado).then((imagen: any) => {
  //   //   this.previsualizacion = imagen.base;
  //   //   console.log(imagen);
  //   // })
  //   this.archivos.push(archivoCapturado);
  // }

  subirArchivo() {
    const formularioDatos = new FormData();
     formularioDatos.append('EmailUser', this.userEmail);
     formularioDatos.append('File', this.uploadForm.get('profile').value);
    // let formToSend = {
    // EmailUser: localStorage.getItem('email'),
    // File: formularioDatos
    // }

    this.http.post('https://ailogicinternship.azurewebsites.net/api/Files', formularioDatos).subscribe(res => {
      console.log("Respuesta", res);
    })
  }
}
