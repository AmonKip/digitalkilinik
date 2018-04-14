import { Visit } from "./visit.model";

export class Patient {
  constructor(
        public current?: number,
        public patientID?: number,
        public firstName?: string,
        public lastName?: string,
        public middleName?: string,
        public gender?: string,
        public dob?: string,
        public placeOfBirth?: string,
        public sublocation?: string,
        public phone?: string,
        public email?: string,
        public idNumber?: string,
        public visits?: Visit[]){}
}
