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
  
  pasantee:any; 

  constructor(private admin: AdminService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.GetPansantesById();
  }

  GetPansantesById() {
    this.route.paramMap.subscribe(res => {
      this.admin.getPasantesById(res.get('id')).subscribe(pasant => {
        this.pasantee = pasant.idInternt;
        
      })
    })
    
  }
}
