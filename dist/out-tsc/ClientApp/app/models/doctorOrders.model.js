"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DoctorsOrder = (function () {
    function DoctorsOrder(vitalSignsId, temperature, pulse, respiration, bloodPressure, oxygenSaturation, visitId, userDetailsID, date) {
        this.vitalSignsId = vitalSignsId;
        this.temperature = temperature;
        this.pulse = pulse;
        this.respiration = respiration;
        this.bloodPressure = bloodPressure;
        this.oxygenSaturation = oxygenSaturation;
        this.visitId = visitId;
        this.userDetailsID = userDetailsID;
        this.date = date;
    }
    return DoctorsOrder;
}());
exports.DoctorsOrder = DoctorsOrder;
//# sourceMappingURL=doctorOrders.model.js.map