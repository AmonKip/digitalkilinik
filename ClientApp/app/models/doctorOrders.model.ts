export class DoctorsOrder {
    constructor(
        public vitalSignsId?: number,
        public temperature?: string,
        public pulse?: string,
        public respiration?: string,
        public bloodPressure?: string,
        public oxygenSaturation?: string,
        public visitId?: number,
        public userDetailsID?: number,
        public date?: string) { }
}