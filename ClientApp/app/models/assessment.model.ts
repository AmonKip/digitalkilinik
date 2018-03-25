export class Assessment {
    constructor(
        public assessmentId?: number,
        public notes?: string,
        public visitId?: number,
        public patientID?: number,
        public userDetailsID?: string,
        public date?: string) { }
}
