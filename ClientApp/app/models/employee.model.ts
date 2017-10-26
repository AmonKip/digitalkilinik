import { Visit } from "./visit.model";

export class Employee {
    constructor(
        public employeeID?: number,
        public title?: string,
        public firstName?: string,
        public lastName?: string,
        public idNumber?: string,
        public email?: string,
        public username?: string,
        public phone?: string,
        public biography?: string,
        public imageUrl?: string,
        public visits?: Visit[]) { }
}