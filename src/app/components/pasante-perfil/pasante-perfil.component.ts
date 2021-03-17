import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router,ActivatedRoute } from '@angular/router';
import { PasantesAll } from '../../models/pasantes-all';

@Component({
  selector: 'app-pasante-perfil',
  templateUrl: './pasante-perfil.component.html',
  styleUrls: ['./pasante-perfil.component.css']
})
export class PasantePerfilComponent implements OnInit {
  
  pasantee: any;
  mostrar = true;

  constructor(private admin: AdminService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    let pasantesId = this.route.snapshot.params['id'];
    this.admin.getPasantesById(pasantesId).subscribe(res => {
      this.pasantee = res;
    })
  }

  GetPansantesById(id: string) {
    this.route.paramMap.subscribe(res => {
      this.admin.getPasantesById(res.get('id')).subscribe(pasant => {
       this.pasantee = pasant.idInternt;
       
     })
   })
    
  }

  ChangeButtom(email:string) {
    this.admin.ChangedButtom(email).subscribe(res => {
      console.log(res);
      
    });
  }
}


