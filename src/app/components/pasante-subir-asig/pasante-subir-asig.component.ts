import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Asignaciones } from "../../models/asignaciones";
import { AsignacionesService } from "../../services/asignaciones.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pasante-subir-asig',
  templateUrl: './pasante-subir-asig.component.html',
  styleUrls: ['./pasante-subir-asig.component.css']
})
export class PasanteSubirAsigComponent implements OnInit {

  public previsualizacion: string = "";
  public archivos: any = "";
  uploadForm: FormGroup | any;
  userEmail: string | Blob = "";

  asigna: Asignaciones = new Asignaciones();

  asignacionId: number = 0;

  currentDate = new Date;


  buttonDisable : boolean = false;

  _opened = true;

  constructor(private activerouter: ActivatedRoute, private router: Router, private asignacionesService: AsignacionesService,private http:HttpClient, private formBuilder: FormBuilder ) { }



  ngOnInit(): void {

    this.userEmail = localStorage.getItem('email')!;

    this.asignacionId = +this.activerouter.snapshot.params['id'];
    this.asignacionesService.getSingleAsignacion(this.asignacionId).subscribe(data =>{
      this.asigna = data
      if(data.limitDate){
        const limitDate = new Date(data.limitDate)
        const month = limitDate.getMonth() + 1;
        const day = limitDate.getDate();
        const year = limitDate.getFullYear();
        this.asigna.limitDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`

        if(this.currentDate > limitDate){
          this.buttonDisable = true
        }
      }

    });

    console.log(this.asignacionId);

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
    formularioDatos.append('id_assignments',this.asignacionId.toLocaleString());

        formularioDatos.append('File' , this.archivos);
        console.log(formularioDatos);


    //  const header = new HttpHeaders().set('Content-Type', 'multipart/form-data');
    this.http.post('https://ailogicinternship.azurewebsites.net/api/Files', formularioDatos )
    .subscribe(res => {
      
      console.log(res);
    },error => {
      console.log(error);
    });

    Swal.fire({
      icon: 'success',
      title: 'Su archivo a sido Subido',
      showConfirmButton: false,
      timer: 1500
    })
   this.router.navigate(['/home-pasantes'])

  }

}
