"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Patient = (function () {
    function Patient(patientID, firstName, lastName, middleName, gender, dob, placeOfBirth, sublocation, phone, email, idNumber, visits) {
        this.patientID = patientID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.gender = gender;
        this.dob = dob;
        this.placeOfBirth = placeOfBirth;
        this.sublocation = sublocation;
        this.phone = phone;
        this.email = email;
        this.idNumber = idNumber;
        this.visits = visits;
    }
    return Patient;
}());
exports.Patient = Patient;
//# sourceMappingURL=patient.model.js.map