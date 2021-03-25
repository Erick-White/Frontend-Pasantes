import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/shared/shared';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { CookieService } from 'ngx-cookie-service';
import { RolesResponse } from '../../models/Roles';
import { PasantesService } from '../../services/pasantes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
 
  Mostrar = false;
  username: any = null;
  Intern : any;
  public _opened: boolean = true;
  @Output() isOpen = new EventEmitter<boolean>();


  constructor(private _adminService: AdminService, private router: Router, private cookie : CookieService,
    private route: ActivatedRoute, private pasante : PasantesService
    ) { }





public _toggleSidebar() {
  let _opened;

    this._opened = !this._opened;

  if(this._opened == true){
     _opened = false;
  }
  else{
     _opened = true;
  }

    console.log(_opened);
    console.log(this.isOpen.emit(_opened));
    this.isOpen.emit(_opened);
  }




  ngOnInit(): void {
      this.username = localStorage.getItem('email');
      //this.getEmail(this.username);
      
  }

  // tslint:disable-next-line: typedef
  // Toggle() {
  //   this.sharedService._opened = !this.sharedService._opened;
  // }

  logout() {
    this._adminService.logout();
    this.cookie.delete('token_access');
    this.router.navigateByUrl('/login');
  }

 /* getEmail(email: any) {
    this.pasante.GetEmail(email).subscribe(
      resp => {
        this.Intern = resp.idInternt;
        console.log(resp);
      }
    );
  }*/
}
