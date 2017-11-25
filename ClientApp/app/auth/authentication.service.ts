import { Injectable, OnInit } from "@angular/core";
import { Repository } from "../models/repository";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/Rx';
import { Router, ActivatedRoute } from "@angular/router";
import "rxjs/add/observable/of";
import 'rxjs/add/operator/delay';
import { Http, RequestMethod, Request, Response, Headers, RequestOptions } from "@angular/http";
import decode from 'jwt-decode';

@Injectable()
export class AuthenticationService implements OnInit {

    constructor(private repo: Repository,
        private router: Router, private route: ActivatedRoute, private http: Http) {

        this.tokenAuthenticated = !!localStorage.getItem('auth_token') && this.isNotExpiredToken();
        // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
        // header component resulting in authed user nav links disappearing despite the fact user is still logged in
        this._authNavStatusSource.next(this.tokenAuthenticated)
    }
   
    ngOnInit() {
        
    }
    ngOnDestroy() {
      
    }
    // Observable navItem source
    private _authNavStatusSource = new BehaviorSubject<boolean>(false);
    // Observable navItem stream
    authNavStatus$ = this._authNavStatusSource.asObservable();

    authenticated: boolean = false;
    name: string;
    isAdmin: boolean = false;
    email: string;
    password: string;
    confirmpassword: string;
    code: string;
    callbackUrl: string;
    tokenAuthenticated: boolean = false;
    auth_token: string;

    // cookie login
    //login(): Observable<boolean> {
    //    this.authenticated = false;
        
    //    return this.repo.login(this.name, this.password)
    //        .map(response => {
    //            if (response) {
    //                if (response.json().roles.indexOf("Admin") != -1) {
    //                    this.isAdmin = true;
    //                }

    //                this.authenticated = true;
    //                this.password = null;
                   
    //                this.router.navigateByUrl(this.callbackUrl || "/table");
    //                this.callbackUrl = "";

    //            }
    //            return this.authenticated;
    //        })
    //        .catch(e => {
    //            this.authenticated = false;
    //            this.isAdmin = false;
    //            return Observable.of(false);
    //        });

    //} 

    tokenLogin(): Observable<boolean> {
        return this.http.request(new Request({
            method: RequestMethod.Post,
            url: "api/token",
            body: { name: this.name, password: this.password }
        })).map(res => (res.json()))
            .map(res => {
                localStorage.setItem('auth_token', res.token);
                const tokenPayload = decode(res.token);
                if (tokenPayload.roles.indexOf("Admin") > -1) {
                    this.isAdmin = true;
                }
                this.tokenAuthenticated = true;
                this._authNavStatusSource.next(true);
                this.router.navigateByUrl(this.callbackUrl || "/table");
                return true;
            })
            .catch(res => {
                return Observable.of(false);
                
            })
       
    }

    isTokenAuthenticated(): boolean {
        return this.tokenAuthenticated;
    }
    // token logout
    tokenLogout() {
        localStorage.removeItem('auth_token');
        this.tokenAuthenticated = false;
        this.isAdmin = false;
        this._authNavStatusSource.next(false);
        this.router.navigateByUrl("/login");
    }
    isLoggedIn() {
        return this.tokenAuthenticated;
    }

    // cookie logout
    logout() {
        this.authenticated = false;
        this.isAdmin = false;
        this.repo.logout();
        window.location.replace("/login");
       
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
                this.router.navigateByUrl("/forgotpasswordconfirm");
                
            }
            return this.authenticated;
        })
        .catch(e => {
            this.authenticated = false;
            this.isAdmin = false;
            return Observable.of(false);
        });
    }
    isNotExpiredToken() {
        const token = localStorage.getItem('auth_token');

        var tokenExpirationTime = decode(token).exp
        var currentTime = Math.floor((new Date).getTime() / 1000);

        if (tokenExpirationTime > currentTime) {

            return true;
        }
        return false;
    }
}