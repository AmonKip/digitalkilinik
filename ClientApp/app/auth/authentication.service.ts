import { Injectable, OnInit } from "@angular/core";
import { Repository } from "../models/repository";
import { Observable } from "rxjs/Observable";
import { Router, ActivatedRoute } from "@angular/router";
import "rxjs/add/observable/of";

@Injectable()
export class AuthenticationService implements OnInit {

    constructor(private repo: Repository,
        private router: Router, private route: ActivatedRoute) {}
   
    ngOnInit() {
        
    }

    authenticated: boolean = false;
    name: string;
    isAdmin: boolean = false;
    email: string;
    password: string;
    confirmpassword: string;
    code: string;
    callbackUrl: string;
    returnUrl: string;

    login(): Observable<boolean> {
        this.authenticated = false;
        return this.repo.login(this.name, this.password)
            .map(response => {
                if (response.ok) {
                    this.authenticated = true;
                    this.password = null;
                   //this.router.navigateByUrl(this.callbackUrl || "/admin/overview");
                    this.router.navigateByUrl(this.callbackUrl || "/");
                
                }
                return this.authenticated;
            })
            .catch(e => {
                console.log(e);
                this.authenticated = false;
                return Observable.of(false);
            });

    }

    logout() {
        this.authenticated = false;
        this.repo.logout();
        this.router.navigateByUrl("/login");
    }
    resetPassword(): Observable<boolean> {
        this.authenticated = false;
        return this.repo.resetPassword(this.email, this.password, this.confirmpassword, this.code)
        
        .map(response => {
                if (response.ok) {
                    this.authenticated = false;
                    this.password = null;
                    this.confirmpassword = null;
                    this.email = null;
                    this.code = null;
                   //this.router.navigateByUrl(this.callbackUrl || "/admin/overview");
                    this.router.navigateByUrl(this.callbackUrl || "/login");
                
                }
                return this.authenticated;
            })
            .catch(e => {
                console.log(e);
                this.authenticated = false;
                return Observable.of(false);
            });
    }

    forgotPassword(): Observable<boolean> {
        this.authenticated = false;
        return this.repo.forgotPassword(this.email)
        .map(response => {
            if (response.ok) {
                this.authenticated = false;
                this.email = null;
                //this.router.navigateByUrl(this.callbackUrl || "/admin/overview");
                this.router.navigateByUrl(this.callbackUrl || "/forgotpasswordconfirmation");
                
            }
            return this.authenticated;
        })
        .catch(e => {
            console.log(e);
            this.authenticated = false;
            return Observable.of(false);
        });
    }
    hasAdminRole(): Observable<boolean> {
        this.isAdmin = false;
        return this.repo.hasAdminRole(this.name)
            .map(response => {
                if (response.ok) {
                    this.isAdmin = true;
                   //this.router.navigateByUrl(this.callbackUrl || "/admin/overview");
                    //this.router.navigateByUrl(this.callbackUrl || "/");
                
                }
                return this.isAdmin;
            })
            .catch(e => {
                console.log(e);
                this.isAdmin = false;
                return Observable.of(false);
            });

    }
}