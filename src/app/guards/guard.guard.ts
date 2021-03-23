import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { RolesService } from '../services/roles.service';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private router: Router,
              private Auth: LoginService, private Role: RolesService, private cookie : CookieService) {

  }
  
  redirect(flag : boolean){
      if(!flag){
        this.router.navigate(['/login']);
      }
  }


  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {

  const cookie = this.cookie.check('token_access');
  this.redirect(cookie);
  return cookie;
    
  /*  if (this.Auth.Loggeado()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;

  }

*/
}

  canDesactive(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

  }

}