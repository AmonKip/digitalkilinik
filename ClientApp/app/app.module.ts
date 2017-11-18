import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { AppComponent } from './app.component';
import { ModelModule } from "./models/model.module";
import { PatientTableComponent } from "./structure/patientTable.component";
import { CategoryFilterComponent } from "./structure/categoryFilter.component";
import { PatientDetailComponent } from "./structure/patientDetail.component";
import { VisitTableComponent } from "./structure/visitTable.component";
import { VisitDetailComponent } from "./structure/visitDetail.component";
import { EmployeeTableComponent } from "./structure/employeeTable.component";
import { EmployeeDetailComponent } from "./structure/employeeDetail.component";
import { PatientCreateComponent } from "./structure/patientCreate.component";
import { PatientEditComponent } from "./structure/patientEdit.component";
import { RoutingConfig } from "./app.routing";
import { AdminModule } from "./admin/admin.module";
import { AppUserCreateComponent } from "./structure/appUserCreate.Component";
import { PatientFilterPipe } from "./filter/patient.pipe";
import { SearchComponent } from "./shared/search.component";
import { ErrorHandler } from "@angular/core";
import { ErrorHandlerService } from "./services/errorHandler.service";
import { AuthModule } from "./auth/auth.module";
import { HeaderComponent } from "./layout/header.component";
import { FooterComponent } from "./layout/footer.component";
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { PatientResolver } from "./models/resolver.model";

const eHandler = new ErrorHandlerService();

export function handler() {
    return eHandler;
}

@NgModule({
    declarations: [AppComponent, PatientTableComponent,
        VisitTableComponent, VisitDetailComponent,
        CategoryFilterComponent, PatientDetailComponent,
        EmployeeTableComponent, EmployeeDetailComponent,
        PatientCreateComponent, AppUserCreateComponent,
        PatientFilterPipe, SearchComponent, PatientEditComponent,
        HeaderComponent, FooterComponent],

    imports: [BrowserModule, FormsModule, ReactiveFormsModule,
        HttpModule, ModelModule, RoutingConfig, AdminModule, AuthModule, Ng4LoadingSpinnerModule],

    providers: [{ provide: ErrorHandlerService, useFactory: handler },
                { provide: ErrorHandler, useFactory: handler }, PatientResolver],
    bootstrap:    [AppComponent]
})
export class AppModule { } 
