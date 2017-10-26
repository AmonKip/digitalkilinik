import { PipeTransform, Pipe } from '@angular/core';
import { Patient } from "../models/patient.model";

@Pipe({
    name: 'patientFilter'
})

export class PatientFilterPipe implements PipeTransform {

    transform(value: Patient[], filter: string): Patient[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((pat: Patient) =>
            pat.firstName != null && pat.firstName.toLocaleLowerCase().indexOf(filter) != -1
            || pat.lastName != null && pat.lastName.toLocaleLowerCase().indexOf(filter) != -1
            || pat.sublocation != null && pat.sublocation.toLocaleLowerCase().indexOf(filter) != -1

        ) : value;

    }
}