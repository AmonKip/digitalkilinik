import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from "./authentication.service";
import decode from 'jwt-decode';

@Injectable()
export class AuthenticationGuard {

    constructor(private router: Router,
        private authService: AuthenticationService) { }

    //canActivateChild(route: ActivatedRouteSnapshot,
    //    state: RouterStateSnapshot): boolean {
    //    //if (this.authService.authenticated) {
    //    if (this.authService.tokenAuthenticated) {
    //        return true;
    //    } else {
    //       this.authService.callbackUrl = state.url.toString();
    //        this.router.navigateByUrl("/login");
    //        return false;
    //    }
    //}
    //canActivate(route: ActivatedRouteSnapshot,
    //    state: RouterStateSnapshot): boolean {
    //    if (this.authService.tokenAuthenticated) {
    //    //if (this.authService.authenticated) {
    //        return true;
    //    } else {
    //        this.authService.callbackUrl = state.url.toString();
    //        this.router.navigateByUrl("/login");
    //        return false;
    //    }
    //}
    canActivateChild(route: ActivatedRouteSnapshot): boolean {

        // this will be passed from the route config
        // on the data property
        const adminRole = "Admin";
        const token = localStorage.getItem('auth_token');
 
        // decode the token to get its payload
        const tokenPayload = decode(token);

        if (!this.authService.tokenAuthenticated || tokenPayload.roles.indexOf(adminRole) == -1) {
            this.router.navigateByUrl("/login");
            return false;
        }
        return true;
    }
    canActivate(route: ActivatedRouteSnapshot): boolean {

        // this will be passed from the route config
        // on the data property
        const expectedRole = route.data.expectedRole;

        const token = localStorage.getItem('auth_token');

        // decode the token to get its payload
        const tokenPayload = decode(token);
      
        if (!this.authService.tokenAuthenticated || tokenPayload.roles.indexOf(expectedRole) == -1) {
            this.router.navigateByUrl("/login");
            return false;
        }
        return true;
    }
    isNotExpiredToken(){
        const token = localStorage.getItem('auth_token');

        var tokenExpirationTime = decode(token).exp
        var currentTime = Math.floor((new Date).getTime() / 1000);

        if (tokenExpirationTime > currentTime) {
            
            return true;
        }
        this.authService.tokenAuthenticated = false;
        localStorage.removeItem('auth_token');
        return false;
    }
   
}