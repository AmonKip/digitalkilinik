import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { Visit } from "../models/visit.model";
import { Router, ActivatedRoute } from "@angular/router";
import { DataTableResource } from 'angular-4-data-table';

@Component({
    selector: "visit-table",
    templateUrl: "visitTable.component.html"
})
export class VisitTableComponent {
    tableResource: DataTableResource<Visit>;
    items: Visit[] = [];
    itemCount: number;
    visits: Visit[];

    constructor(private repo: Repository, private router: Router) {
        this.repo.getVisits()
        .subscribe(visits =>{
            this.visits = visits;
            this.initializeTable(visits);
           
        })

    }

/*     get visits(): Visit[] {
        return this.repo.visits;
    } */

    selectVisit(id: number) {
        this.repo.getVisit(id);
        this.router.navigateByUrl("/visitdetail");
    }
    private initializeTable(visits: Visit[]){
        this.tableResource = new DataTableResource(visits);
            this.tableResource.query({offset: 0})
              .then(items => this.items = items);
            this.tableResource.count()
              .then(count => this.itemCount = count);
    }
    reloadItems(params){
        if(!this.tableResource) return;

       this.tableResource.query(params)
         .then(items => this.items = items);
    }
    
}
