"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Outcome_1 = require('../../models/Outcome');
var outcome = (function (_super) {
    __extends(outcome, _super);
    function outcome(title, admittance, goal, discharge) {
        if (title === void 0) { title = ''; }
        if (admittance === void 0) { admittance = 0; }
        if (goal === void 0) { goal = 0; }
        if (discharge === void 0) { discharge = 0; }
        _super.call(this);
        this.title = title;
        this.admittance = admittance;
        this.goal = goal;
        this.discharge = discharge;
    }
    outcome.prototype.GetChartRows = function () {
        var c1 = [];
        c1.push({ v: this.title });
        c1.push({ v: this.admittance });
        c1.push({ v: this.goal });
        c1.push({ v: this.discharge, f: 'test' });
        return c1;
    };
    return outcome;
}(Outcome_1.Outcome));
//# sourceMappingURL=file1.js.map