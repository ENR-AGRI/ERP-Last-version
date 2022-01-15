import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommercialGuard implements CanActivate {
  constructor(private userSRV: AuthService, private router: Router) {}
  canActivate() {
    let user = this.userSRV.currentUser;

    if (user && user.role === "REP") return true;
    this.router.navigate(["/login"]);
    return false;
  }

}
