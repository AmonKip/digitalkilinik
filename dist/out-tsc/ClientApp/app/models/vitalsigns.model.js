"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VitalSigns = (function () {
    function VitalSigns(vitalSignsId, temperature, pulse, respiration, bloodPressure, oxygenSaturation, visitId, userDetailsID, patientID, date) {
        this.vitalSignsId = vitalSignsId;
        this.temperature = temperature;
        this.pulse = pulse;
        this.respiration = respiration;
        this.bloodPressure = bloodPressure;
        this.oxygenSaturation = oxygenSaturation;
        this.visitId = visitId;
        this.userDetailsID = userDetailsID;
        this.patientID = patientID;
        this.date = date;
    }
    return VitalSigns;
}());
exports.VitalSigns = VitalSigns;
//# sourceMappingURL=vitalsigns.model.js.map