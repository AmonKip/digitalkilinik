import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class AdminAuthGuard {

    constructor(private router: Router,
        private authService: AuthenticationService) { }

    canActivateChild(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (this.authService.authenticated && this.authService.isAdmin) {
            return true;
        } else {
            this.authService.callbackUrl = state.url.toString();
            this.router.navigateByUrl("/login");
            return false;
        }
    }
    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (this.authService.authenticated && this.authService.isAdmin) {
            return true;
        } else {
            this.authService.callbackUrl = state.url.toString();
            this.router.navigateByUrl("/login");
            return false;
        }
    }

}