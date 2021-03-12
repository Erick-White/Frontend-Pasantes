import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { PasantesAll} from '../../models/pasantes-all';
import { Pasantes } from 'src/app/models/pasantes';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lista-pasantes',
  templateUrl: './lista-pasantes.component.html',
  styleUrls: ['./lista-pasantes.component.css']
})
export class ListaPasantesComponent implements OnInit {

  pasantes: PasantesAll[] = [];
  pasante: any;

  
  
  constructor(private admin: AdminService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.GetAllPasantes();
    let pacientesId = this.route.snapshot.paramMap.get('id');
    console.log(pacientesId)

  }

  GetAllPasantes() {
    this.admin.getAllPasantes().subscribe(resp => {
      this.pasantes = <PasantesAll[]>resp
     
      console.log(resp);
    })
  }

  DeletedPasante(Pasantes:PasantesAll,i :number) {
    this.admin.DeletedPasantes(Pasantes.idInternt).subscribe(resp => {
     this.pasantes.splice(i,1)
    })
  }

  GetPansantesById() {
    
  }
}
