/// <reference path="../../types/types.d.ts" />
var Application;
(function (Application) {
    var Components;
    (function (Components) {
        var PatientList = (function () {
            function PatientList(patientFact, $location) {
                this.patientFact = patientFact;
                this.$location = $location;
                this.SearchText = "";
                this.$insert = ['patientFact', '$location'];
                console.log("LOGIN");
            }
            PatientList.prototype.$onInit = function () {
                var _this = this;
                this.patientFact.Search('test')
                    .then(function (resp) {
                    _this.Patients = resp;
                });
            };
            PatientList.prototype.Logout = function () {
                this.$location.path("/");
            };
            PatientList.prototype.OutcomeReport = function (p) {
                //  this.$location.path('/patient-list/' + this.Patient.id + '/outcomes-report');
                var options = "fullscreen=yes,toolbar=no,location=no,\n                            directories=no,status = no,\n                            menubar = no, scrollbars = no, resizable = no'";
                var id = "OutcomesReport";
                var w = window.open('/#/patient-list/' + p.id + '/outcomes-report', id, options);
                w.focus();
            };
            return PatientList;
        }());
        app.component("patientList", {
            controller: PatientList,
            controllerAs: "vm",
            templateUrl: "app/pages/patient-list/patient-list.html",
        });
    })(Components = Application.Components || (Application.Components = {}));
})(Application || (Application = {}));
//# sourceMappingURL=patient-list.js.map