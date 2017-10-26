"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = (function () {
    function Employee(employeeID, title, firstName, lastName, idNumber, email, username, phone, biography, imageUrl, visits) {
        this.employeeID = employeeID;
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = idNumber;
        this.email = email;
        this.username = username;
        this.phone = phone;
        this.biography = biography;
        this.imageUrl = imageUrl;
        this.visits = visits;
    }
    return Employee;
}());
exports.Employee = Employee;
//# sourceMappingURL=employee.model.js.map