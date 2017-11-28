import { Patient } from "./patient.model";
import { Employee } from "./employee.model";

export class Visit {
    constructor(
        public visitId?: number,
        public date?: string,
        public complaint?: string,
        public background?: string,
        public patientID?: number,
        public current?: number) { }
}