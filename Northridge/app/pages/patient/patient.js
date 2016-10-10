/// <reference path="../../types/types.d.ts" />
var Application;
(function (Application) {
    var Components;
    (function (Components) {
        var Patient = (function () {
            function Patient(patientFact, $routeParams, $location) {
                this.patientFact = patientFact;
                this.$routeParams = $routeParams;
                this.$location = $location;
                this.Patient = {};
                this.SearchText = "";
                this.$insert = ['patientFact', '$routeParams', '$location'];
            }
            Patient.prototype.$onInit = function () {
                var _this = this;
                console.log("Patient " + this.$routeParams.id);
                var id = parseInt(this.$routeParams.id);
                this.patientFact.Search(1)
                    .then(function (resp) {
                    angular.forEach(resp, function (i, k) {
                        console.log(i);
                        if (i.id === id) {
                            _this.Patient = i;
                            _this.Outcomes = _this.Patient.outcomes;
                        }
                    });
                });
                //this.patientFact.Outcomes(1)
                //    .then(resp => {
                //        this.Outcomes = resp;
                //    });
            };
            Patient.prototype.OutcomeReport = function () {
                //  this.$location.path('/patient-list/' + this.Patient.id + '/outcomes-report');
                var options = 'fullscreen=yes,toolbar=no,location=no,directories=no,status = no, menubar = no, scrollbars = no, resizable = no';
                var id = "OutcomesReport";
                var w = window.open('/#/patient-list/' + this.Patient.id + '/outcomes-report', id, options);
                w.focus();
            };
            return Patient;
        }());
        app.component("patient", {
            controller: Patient,
            controllerAs: "vm",
            templateUrl: "app/pages/patient/patient.html",
        });
    })(Components = Application.Components || (Application.Components = {}));
})(Application || (Application = {}));
//# sourceMappingURL=patient.js.map