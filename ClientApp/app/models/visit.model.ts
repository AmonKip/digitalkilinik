import { Patient } from "./patient.model";
import { Employee } from "./employee.model";

export class Visit {
    constructor(
        public visitId?: number,
        public date?: string,
        public complain?: string,
        public medications?: string,
        public provider?: Employee,
        public patient?: Patient) { }
}