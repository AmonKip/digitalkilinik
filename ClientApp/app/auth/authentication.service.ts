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
    ngOnDestroy() {
        console.log("Destroying...");
    }

    authenticated: boolean = false;
    name: string;
    isAdmin: boolean = false;
    email: string;
    password: string;
    confirmpassword: string;
    code: string;
    callbackUrl: string;

    login(): Observable<boolean> {
        this.authenticated = false;
        
        return this.repo.login(this.name, this.password)
            .map(response => {
                if (response) {
                    if (response.json().roles.indexOf("Admin") != -1) {
                        this.isAdmin = true;
                    }

                    this.authenticated = true;
                    this.password = null;
                    this.router.navigateByUrl(this.callbackUrl || "/table");
                    this.callbackUrl = "";

                }
                return this.authenticated;
            })
            .catch(e => {
                this.authenticated = false;
                this.isAdmin = false;
                return Observable.of(false);
            });

    } 

    logout() {
        this.authenticated = false;
        this.isAdmin = false;
        this.repo.logout();
        window.location.replace("/login");
        //document.cookie = ".AspNetCore.Identity.Application; expires = Thu, 18 Dec 2013 12:00:00 UTC";
        //this.router.navigateByUrl("/login");
    }
    resetPassword(): Observable<boolean> {
        this.authenticated = false;
        return this.repo.resetPassword(this.email, this.password, this.confirmpassword, this.code)
        
        .map(response => {
                if (response.ok) {
                    this.authenticated = false;
                    this.isAdmin = false;
                    this.password = null;
                    this.confirmpassword = null;
                    this.email = null;
                    this.code = null;
                    this.router.navigateByUrl("/passwordresetconfirm");
                
                }
                return this.authenticated;
            })
            .catch(e => {
                this.authenticated = false;
                this.isAdmin = false;
                return Observable.of(false);
            });
    }

    forgotPassword(): Observable<boolean> {
        this.authenticated = false;
        return this.repo.forgotPassword(this.email)
        .map(response => {
            if (response.ok) {
                this.authenticated = false;
                this.isAdmin = false;
                this.email = null;
                this.router.navigateByUrl("/forgotpasswordconfirmation");
                
            }
            return this.authenticated;
        })
        .catch(e => {
            this.authenticated = false;
            this.isAdmin = false;
            return Observable.of(false);
        });
    }
}