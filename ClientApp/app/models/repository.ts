﻿import { Patient } from "./patient.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http, RequestMethod, Request, Response } from "@angular/http";
import "rxjs/add/operator/map";
import { Filter } from "./configClasses.repository";
import { Employee } from "./employee.model";
import { Visit } from "./visit.model";
import { AppUser } from "./appuser.model";
import { AppRole } from "./approle.model";
import { ErrorHandlerService, ValidationError } from "../services/errorHandler.service";
import "rxjs/add/operator/catch";

const patientsUrl = "api/patients";
const employeesUrl = "api/employees";
const visitsUrl = "api/visits";
const addRequestUrl = "api/addrequest";


@Injectable()
export class Repository {

    private filterObject = new Filter();

    constructor(private http: Http) {
        //this.filter.category = "";
        this.getPatients();
        this.getEmployees();
        this.getVisits();
        this.getUsers();
        this.getRoles();
        this.getAccountRequests();
    }

    getPatient(id: number) {
        this.sendRequest(RequestMethod.Get, "/api/patients/" + id)
            .subscribe(response => { this.patient = response; });
    }

    getEmployee(id: number) {
        this.sendRequest(RequestMethod.Get, "/api/employees/" + id)
            .subscribe(response => { this.employee = response; });
    }

    getPatients() {
        let url = patientsUrl

        if (this.filter.category && this.filter.search)
        {
            url += "?category=" + this.filter.category + "&search=" + this.filter.search;
        }
        if (this.filter.category && !this.filter.search) {
            url += "?category=" + this.filter.category;
        }
        if (!this.filter.category && this.filter.search) {
            url += "?search=" + this.filter.search;
        }

        this.sendRequest(RequestMethod.Get, url)
            .subscribe(response => { this.patients = response; });
    }
    getEmployees() {
        this.sendRequest(RequestMethod.Get, employeesUrl)
            .subscribe(response => { this.employees = response; });
    }
    // get all visits
    getVisits() {
        this.sendRequest(RequestMethod.Get, visitsUrl)
            .subscribe(response => { this.visits = response; });
    }
    // get single visit by visit id
    getVisit(id: number) {
        this.sendRequest(RequestMethod.Get, "/api/visits/" + id)
            .subscribe(response => { this.visit = response; });
    }

    // get single user by id
    getUser(id: number) {
        this.sendRequest(RequestMethod.Get, "/api/users/" + id)
            .subscribe(response => { this.appUser = response; });
    }

    // get app users
    getUsers() {
        this.sendRequest(RequestMethod.Get, "/api/users")
            .subscribe(response => { this.appUsers = response; });
    }

    // get all roles
    getRoles() {
        this.sendRequest(RequestMethod.Get, "/api/roles")
            .subscribe(response => { this.appRoles = response; });
    }
    // get account requests
    getAccountRequests() {
        this.sendRequest(RequestMethod.Get, "/api/getrequests")
            .subscribe(response => { this.appUserRequests = response; });
    }
    // creates patient
    createPatient(pat: Patient) {
        let data = {
            firstName: pat.firstName, lastName: pat.lastName, middleName: pat.middleName, dob: pat.dob,
            placeOfBirth: pat.placeOfBirth, sublocation: pat.sublocation, phone: pat.phone, email: pat.email,
            idNumber: pat.idNumber, gender: pat.gender
        };
        this.sendRequest(RequestMethod.Post, patientsUrl, data)
            .subscribe(response => {
                pat.patientID = response;
                this.patients.push(pat);
            })
    }
    // creates appUser
    createUser(user: AppUser) {
        let data = {
            title: user.title, firstName: user.firstName, lastName: user.lastName, idNumber: user.idNumber, username: user.username, phoneNumber: user.phoneNumber, biography: user.biography,
            imageUrl: user.imageUrl, gender: user.gender, email: user.email, reason: user.reason};
        this.sendRequest(RequestMethod.Post, addRequestUrl, data)
            .subscribe(response => {
                user.email = response;
                this.patients.push(user);
            })
    }
    // create employee
    createEmployee(emp: Employee) {
        let data = {
            title: emp.title, firstName: emp.firstName, lastName: emp.lastName,idNumber: emp.idNumber, email: emp.email, username: emp.username, phone: emp.phone, biography: emp.biography,
            imageUrl: emp.imageUrl
        };
        this.sendRequest(RequestMethod.Post, employeesUrl, data)
            .subscribe(response => {
                emp.employeeID = response;
                this.employees.push(emp);
            })
    }
    // update method
    replacePatient(pat: Patient) {
        let data = {
            firstName: pat.firstName, lastName: pat.lastName, middleName: pat.middleName, dob: pat.dob,
            placeOfBirth: pat.placeOfBirth, sublocation: pat.sublocation, phone: pat.phone, email: pat.email,
            idNumber: pat.idNumber, gender: pat.gender
        };
        this.sendRequest(RequestMethod.Put, patientsUrl + "/" + pat.patientID, data)
            .subscribe(response => this.getPatients());
        
    }

    // after update, the patients/employees array is repopulated using another request to server  ---very inefficient  process
    //todo: dynamically update only the changed patient to avoid round trip to the server
    replaceUser(user: AppUser) {
        let data = {
            title: user.title, firstName: user.firstName, lastName: user.lastName, idNumber: user.idNumber, email: user.email,
            username: user.username, phoneNumber: user.phoneNumber, reason: user.reason, biography: user.biography,
            imageUrl: user.imageUrl, gender: user.gender, enabled: user.enabled
        };
        this.sendRequest(RequestMethod.Put, "api/edituser/" + user.userDetailsID, data)
            .subscribe(response => this.getUsers());
    }

    // delete patient by id
    deletePatient(id: number) {
        this.sendRequest(RequestMethod.Delete, patientsUrl + "/" + id)
            .subscribe(response => this.getPatients());
    } 

    // delete employee by id
    deleteEmployee(id: number) {
        this.sendRequest(RequestMethod.Delete, employeesUrl + "/" + id)
            .subscribe(response => this.getEmployees());
    } 
    
    // consolidated request method
    private sendRequest(verb: RequestMethod, url: string, data?: any): Observable<any> {
        return this.http.request(new Request({ method: verb, url: url, body: data }))
            .map(response => {
                return response.headers.get("Content-Length") != "0"
                    ? response.json() : null;
            })
            .catch((errorResponse: Response) => {
                if (errorResponse.status == 400) {
                    let jsonData: string;
                    try {
                        jsonData = errorResponse.json();
                    } catch (e) {
                        throw new Error("Network Error");
                    }
                    let messages = Object.getOwnPropertyNames(jsonData)
                        .map(p => jsonData[p]);
                    throw new ValidationError(messages);
                }
                throw new Error("Network Error");
            });
    }
    patientVisitsCount() {
        return this.singlePatientVisits.length;
    }
    getPatientVisits(id: number) {
        this.sendRequest(RequestMethod.Get, "api/patientvisits/" + id)
            .subscribe(response => { this.singlePatientVisits = response; });
       
    }
    // login
    login(name: string, password: string): Observable<Response> {
        return this.http.post("/api/account/login",
            { name: name, password: password });
    }
    // email password reset 
    resetPassword(email: string, password: string, confirmpassword: string, code: string): Observable<Response> {
        return this.http.post("/api/account/resetpassword",
            { email: email, password: password, confirmpassword: confirmpassword, code: code });
    }
    //logout
    logout() {
        this.http.post("/api/account/logout", null).subscribe(respone => { });
    }

    // send email 
    forgotPassword(email: string): Observable<Response> {
        return this.http.post("/api/account/forgotpassword",
            { email: email});
    }
    isAdmin(email: string): Observable<Response> {
         console.log("isadmin called");
        return this.http.post("/api/account/isadmin",
            { email: email});
    }
    toggleAccount(id: number, fromrequest = false){
      this.sendRequest(RequestMethod.Post, "/api/account/toggle/" + id +"?fromrequest=" + fromrequest)
            .subscribe(response => this.getUsers());
   }
    // properties 
    patient: Patient;
    patients: Patient[];
    employee: Employee;
    employees: Employee[];
    visit: Visit;
    visits: Visit[];
    singlePatientVisits: Visit[];
    appUser: AppUser;
    appUsers: AppUser[];
    appRole: AppRole;
    appRoles: AppRole[];
    appUserRequest: AppUser;
    appUserRequests: AppUser[];

    get filter(): Filter {
        return this.filterObject;
    }
}