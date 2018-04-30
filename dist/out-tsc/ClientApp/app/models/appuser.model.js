"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppUser = (function () {
    function AppUser(userDetailsID, title, email, password, confirmPassword, firstName, lastName, idNumber, username, phoneNumber, gender, enabled, reason, biography, imageUrl, file) {
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
        this.reason = reason;
        this.biography = biography;
        this.imageUrl = imageUrl;
        this.file = file;
    }
    return AppUser;
}());
exports.AppUser = AppUser;
//# sourceMappingURL=appuser.model.js.map