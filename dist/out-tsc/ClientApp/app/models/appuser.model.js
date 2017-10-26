"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppUser = (function () {
    function AppUser(userDetailsID, title, email, password, confirmPassword, firstName, lastName, idNumber, username, phoneNumber, gender, enabled, biography, imageUrl) {
        this.userDetailsID = userDetailsID;
        this.title = title;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = idNumber;
        this.username = username;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.enabled = enabled;
        this.biography = biography;
        this.imageUrl = imageUrl;
    }
    return AppUser;
}());
exports.AppUser = AppUser;
//# sourceMappingURL=appuser.model.js.map