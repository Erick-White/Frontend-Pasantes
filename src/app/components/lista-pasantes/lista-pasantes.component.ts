import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { PasantesAll} from '../../models/pasantes-all';
import { Pasantes } from 'src/app/models/pasantes';
import { Convocatorias } from "../../models/convocatorias";

import { ConvocatoriaService } from "../../services/convocatoria.service";
import { AdminService } from 'src/app/services/admin.service';
import { RolesService } from '../../services/roles.service';
import { RolesResponse } from 'src/app/models/Roles';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-lista-pasantes',
  templateUrl: './lista-pasantes.component.html',
  styleUrls: ['./lista-pasantes.component.css']
})
export class ListaPasantesComponent implements OnInit {

  //Informacion de la convocatoria en la que se encuentra
  convoLista: Convocatorias = new Convocatorias();

  currentContactInfo: any = {};
  pasantee: any;
  pasantes: PasantesAll[] = [];
  public Role: RolesResponse[] = [];
  pasants = new Pasantes();
  loading: boolean = false;
  name : any;
  p : number = 1;
  _opened = true;
  
  // tslint:disable-next-line: new-parens
  // tslint:disable-next-line: new-parens
  subcription: Subscription = new Subscription;

//Algo
  constructor(private admin: AdminService,private router: Router,private route: ActivatedRoute,
              private Roles : RolesService,  private convocatoriaService: ConvocatoriaService,

  ) { }
  
  _toggleSidebar(_opened : any) {
    this._opened = _opened;

  }
  convocatoriaId: number = 0;

  ngOnInit(): void {
    // this.admin.refreshNeeded$.subscribe(res => {
    //   this.GetAllPasantes();
    //   console.log(res);
    // })

    //Variable para mostrar la Convocatoria en la que se encuentra
    this.convocatoriaId = +this.route.snapshot.params['id'];
    //Servicio para traer la informacion de una sola Convocatoria
    this.convocatoriaService.getSingleConvocatoria(this.convocatoriaId).subscribe(data =>{
    this.convoLista = data;
    // this.internLimit;
    console.log(data)

  })

    this.loading = true;
    this.GetAllPasantes();

    this.subcription = this.admin.refreshNeeded$.subscribe(() =>{
      
      
      this.GetAllPasantes();

    });

   
   
    
  //   this.route.params.subscribe(params => {
  //     this.GetPansantesById(params['id']);
  // })

  }

//Traer todos los Pasantes
  GetAllPasantes() {
    this.admin.getAllPasantes().subscribe(resp => {
      this.pasantes = <PasantesAll[]>resp
      this.loading = false;

    })
  }
//Eliminar los pasantes ByID
  DeletedPasante(Pasantes: PasantesAll, i: number) {
    Swal.fire({
      title: 'Est??s seguro?',
      text: `Deseas eliminar a: ${Pasantes.name} ${Pasantes.lastname}`,
      icon: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText:'Cancelar',
      confirmButtonText: 'Si, eliminalo!',
      allowOutsideClick: false
    }).then((result) => {
      
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          `${Pasantes.name} ${Pasantes.lastname}, ha sido eliminado de la pasantia.`,
          'success'
        )
        this.admin.DeletedPasantes(Pasantes.idInternt).subscribe(resp => {
          this.pasantes.splice(i, 1)
          
         
      })
        
    }
    })
    
    
  }

  //Obtener los pasantes ByID
  GetPansantesById(id: string) {
    this.route.paramMap.subscribe(res => {
      this.admin.getPasantesById(res.get('id')).subscribe(pasant => {
       this.pasantee = pasant.idInternt;
      
     })
   })

  }
 // Metodo para traer la info by ID
  contactInfo(id: string) {
    this.loading = true;
    this.admin.getPasantesById(id).subscribe(res => {
      this.currentContactInfo = res;
      this.loading = false;
      
   });
  }

  // Actualizar los roles de los pasantes
  Update(id: any) {
    const user = this.pasantes.find(x => x.idUser === id);
    console.log(user);
    let userToSend = new Object();
    userToSend = {
      "idUser": user?.idUser,
      
    }
    if (user) { return; }
    this.Roles.AssignRole(userToSend)
      .pipe(first())
      // tslint:disable-next-line: deprecation
      .subscribe(() => this.Role = this.Role.filter(x => x.idUser === id));

    
  }
// Filtro
  search(){
    if(this.name === ""){
      this.ngOnInit();
    } else{
      this.pasantes = this.pasantes.filter(res =>{
        return res.name?.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
  }


}


