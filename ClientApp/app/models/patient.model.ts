import { Visit } from "./visit.model";

export class Patient {
    constructor(
        public patientID?: number,
        public firstName?: string,
        public lastName?: string,
        public middleName?: string,
        public dob?: string,
        public placeOfBirth?: string,
        public sublocation?: string,
        public phone?: string,
        public email?: string,
        public idNumber?: string,
        public visits?: Visit[]){}
}