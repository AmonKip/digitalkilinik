import { Component } from '@angular/core';
import { AuthenticationService } from "../auth/authentication.service";

@Component({
    selector: 'layout-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    name: string;
    isAdmin: boolean;

    constructor(public authService: AuthenticationService) {
        this.name = this.authService.name;
        this.isAdmin = this.authService.isAdmin;
    }
    //activeTab(event)
    //{
    //   // var y = document.getElementById("active").className -= " active"
    //   // var x = document.getElementById("navArea");
    //   // var x = document.getElementById(event.toElement.attributes.id.nodeValue).className += " active"
        
    //    console.log(x);
    //}

 
}
