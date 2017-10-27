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
        // reset login status
        //this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        console.log("Init called");
    }

    authenticated: boolean = false;
    name: string;
    password: string;
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
}