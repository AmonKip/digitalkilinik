"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Assessment = (function () {
    function Assessment(assessmentId, notes, visitId, patientID, userDetailsID, date) {
        this.assessmentId = assessmentId;
        this.notes = notes;
        this.visitId = visitId;
        this.patientID = patientID;
        this.userDetailsID = userDetailsID;
        this.date = date;
    }
    return Assessment;
}());
exports.Assessment = Assessment;
//# sourceMappingURL=assessment.model.js.map