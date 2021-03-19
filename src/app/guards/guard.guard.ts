import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { RolesService } from '../services/roles.service';


@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private router: Router,
    private Auth: LoginService, private Role : RolesService) {
    
  }
  canActivate(): boolean {


    
    if (this.Auth.Loggeado())
      return true
    
    this.router.navigate(['/login'])
      return false

  }
  
}

