import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PasantesAll } from '../../models/pasantes-all';
import { LoginService } from '../../services/login.service';
import { RolesResponse } from '../../models/Roles';
import { Edit } from 'src/app/models/Edit';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pasante-perfil',
  templateUrl: './pasante-perfil.component.html',
  styleUrls: ['./pasante-perfil.component.css']
})
export class PasantePerfilComponent implements OnInit {
  pasantes: PasantesAll[] = [];
  EditPasante: Edit[] = [];
  pasantee: any;
  mostrar = true;
  correo: any;
  role : RolesResponse = new RolesResponse();
  currentContactInfo : any = {};


  public readonly roleSuper = 'Admin';
  roleIntern = 'Intern';
  constructor(private admin: AdminService, private router: Router, private route: ActivatedRoute, private Auth: LoginService) { }

  ngOnInit(): void {
    let pasantesId = this.route.snapshot.params['id'];
    this.admin.getPasantesById(pasantesId).subscribe(res => {
      this.pasantee = res; 
       
    })
    
  }
//Obtener los usuarios por su id para llenar la información del perfil
  GetPansantesById(id: string) {
    this.route.paramMap.subscribe(res => {
      this.admin.getPasantesById(res.get('id')).subscribe(pasant => {
       this.pasantee = pasant.idInternt;
       
     })
   })
    
  }

// Actualizar los datos del usuario .
  UpdatePasante(Editar: Edit, i: number,email:string) {
    let userToSend = new Object();
    userToSend = {
      idInternt:Editar.idInternt,
      name: Editar?.name,
      lastname: Editar?.lastname,
      cedula: Editar?.cedula,
      phone: Editar?.phone,
      github: Editar?.github,
      linkedin: Editar?.linkedin,
      cv: Editar?.cv,
      birthDate: Editar?.birthDate,
      email:email,
      userImg: Editar?.userImg
    };

    this.admin.UpdatePasantes(Editar.idInternt, userToSend).subscribe(resp => {
      Swal.fire({
        title: 'Estás seguro?',
        text: `Deseas editar tus datos ${Editar.name} ${Editar.lastname}?`,
        icon: 'question',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, guardalo!',
        allowOutsideClick: false
      }).then((result) => {
        
        if (result.isConfirmed) {
          Swal.fire(
            'Cambios guardados!',
            'Sus datos se cambiaron correctamente!',
            'success'
          )
        }
      });
     
    }, (err) => {
      Swal.fire({
        icon: 'error',
        title: "Error al actualizar los datos",
        text: "Porfavor escriba los datos correctamente",
      });
    })
   
    
    
  }

  

// }
  
// Metodo extra para obtener los datos del pasante mediante su id
  contactInfo(id: string) {
    this.admin.getPasantesById(id).subscribe(res => {
      this.currentContactInfo = res;
      
      
   });
  }


  ChangeButtom(email: string,) {
    
    this.correo = localStorage.getItem('email');
    this.Auth.ChangedButtom(this.correo).subscribe(res => {
      console.log(res);
      
    });
  }
}


