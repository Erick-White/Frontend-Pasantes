import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { CookieService } from 'ngx-cookie-service';
import { RolesResponse } from '../../models/Roles';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  Mostrar = false;
  username: any = null;

  constructor(private _adminService: AdminService, private router: Router, private cookie : CookieService ) { }

  ngOnInit(): void {
      this.username = localStorage.getItem('email');
  }

  // tslint:disable-next-line: typedef
  Toggle() {
    this.Mostrar = !this.Mostrar;
  }

  logout() {
    this._adminService.logout();
    this.cookie.delete('token_access');
    this.router.navigateByUrl('/login');
  }



}
