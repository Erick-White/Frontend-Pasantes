import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';


@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private router: Router,
    private Auth: LoginService) {
    
  }
  canActivate(): boolean {
    if (this.Auth.Loggeado())
      return true
    
    this.router.navigate(['/login'])
      return false

  }
  
}

