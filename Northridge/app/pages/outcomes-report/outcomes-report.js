/// <reference path="../../types/types.d.ts" />
/// <reference path="../../models/outcome.ts" />
var Application;
(function (Application) {
    var GoogleChartOptions;
    (function (GoogleChartOptions) {
        var Column = (function () {
            function Column(id, label, type) {
                if (id === void 0) { id = ''; }
                if (label === void 0) { label = ''; }
                this.id = id;
                this.label = label;
                this.type = type;
            }
            return Column;
        }());
        GoogleChartOptions.Column = Column;
    })(GoogleChartOptions = Application.GoogleChartOptions || (Application.GoogleChartOptions = {}));
})(Application || (Application = {}));
var Application;
(function (Application) {
    var Components;
    (function (Components) {
        var outcome = (function () {
            function outcome(title, admission, goal, discharge) {
                if (title === void 0) { title = ''; }
                if (admission === void 0) { admission = 0; }
                if (goal === void 0) { goal = 0; }
                if (discharge === void 0) { discharge = 0; }
                this.title = title;
                this.admission = admission;
                this.goal = goal;
                this.discharge = discharge;
            }
            outcome.prototype.GetChartRows = function () {
                var c1 = [];
                c1.push({ v: this.title });
                c1.push({ v: this.admission });
                c1.push({ v: this.goal });
                c1.push({ v: this.discharge, f: 'test' });
                return c1;
            };
            return outcome;
        }());
        var patient = (function () {
            function patient() {
            }
            return patient;
        }());
        var outcomesReport = (function () {
            function outcomesReport($location, $http, $timeout, patientFact, $routeParams) {
                this.$location = $location;
                this.$http = $http;
                this.$timeout = $timeout;
                this.patientFact = patientFact;
                this.$routeParams = $routeParams;
                this.mydocs = [];
                this.api = {};
                this.$insert = ['$location', '$http', '$timeout', 'patientFact', '$routeParam'];
            }
            outcomesReport.prototype.$onInit = function () {
                var _this = this;
                var pat = new patient();
                pat.id = 1;
                pat.firstName = "Daniel";
                pat.lastName = "Morris";
                pat.admissionDate = new Date("1/2/16");
                pat.dischargeDate = new Date("1/2/16");
                pat.referringHospital = "Finnish Medical Center";
                pat.paymentSources = "M-care";
                pat.primaryImpairment = "Cardiovascular disease";
                pat.primaryMd = "Dr. Christopher Rose";
                pat.preparedToManageAtAdmission = "No";
                pat.preparedToManageAdDischarge = "Yes";
                pat.dischargeOutcome = "Able to Manage";
                pat.dischargeOutComeGoal = "Able to Jog";
                var id = parseInt(this.$routeParams.id);
                this.patientFact.Search("some name")
                    .then(function (resp) {
                    angular.forEach(resp, function (i, k) {
                        console.log(i);
                        if (i.id === id) {
                            _this.patient.firstName = i.firstName;
                            _this.patient.lastName = i.lastName;
                        }
                    });
                });
                this.patient = pat;
                var rows = [];
                this.patientFact.Outcomes(pat.id)
                    .then(function (resp) {
                    angular.forEach(resp, function (i, k) {
                        rows.push({ c: new outcome(i.title, i.admission, i.goal, i.discharge).GetChartRows() });
                    });
                });
                var names = ['Adm', 'Goal', 'DC'];
                this.myChart = this.BuildChart(pat.firstName + ' ' + pat.lastName + ' FIM Self Help Profile', names, rows);
                this.$timeout(function () { _this.MakeAmbulation(_this); }, 1000);
            };
            outcomesReport.prototype.MakeAmbulation = function (self) {
                console.log("MakeAmbulation");
                var names = ['Adm', 'Goal', 'DC'];
                self.ambulation = self.BuildChart("Assistance", names, [
                    { c: new outcome("sTransfer Bed/Chair", 3, 6, 5).GetChartRows() },
                    { c: new outcome("sTransfer Toilet", 3, 6, 5).GetChartRows() },
                    { c: new outcome("sTransfer Tub/Shower", 3, 6, 5).GetChartRows() }]);
                self.$timeout(function () { self.MakeAssistance(self); }, 1000);
            };
            outcomesReport.prototype.MakeAssistance = function (self) {
                console.log("Make Assistance");
                var names = ['Adm', 'Goal', 'DC'];
                self.assistance = self.BuildChart("Assistance", names, [
                    { c: new outcome("sTransfer Bed/Chair", 3, 6, 5).GetChartRows() },
                    { c: new outcome("sTransfer Toilet", 3, 6, 5).GetChartRows() },
                    { c: new outcome("sTransfer Tub/Shower", 3, 6, 5).GetChartRows() }]);
                self.$timeout(function () { self.MakeMobility(self); }, 1000);
            };
            outcomesReport.prototype.MakeMobility = function (self) {
                console.log("Make Mobility");
                var names = ['Adm', 'Goal', 'DC'];
                self.mobilityProfile = self.BuildChart("MP", names, [
                    { c: new outcome("Transfer Bed/Chair", 3, 6, 5).GetChartRows() },
                    { c: new outcome("Transfer Toilet", 3, 6, 5).GetChartRows() },
                    { c: new outcome("Transfer Tub/Shower", 3, 6, 5).GetChartRows() }]);
            };
            outcomesReport.prototype.BuildChart = function (titleOfReport, names, rows) {
                var p = this.patient;
                var chart1 = {};
                chart1.type = "google.charts.Bar";
                chart1.displayed = false;
                //TITLE
                var col = [];
                col.push(new Application.GoogleChartOptions.Column("titleOfReport", titleOfReport, "string"));
                //NUMERIC DATA LABELS        
                for (var i = 0; i < names.length; i++) {
                    col.push(new Application.GoogleChartOptions.Column('id' + i, names[i], "number"));
                }
                chart1.data = { "cols": col, "rows": rows };
                return chart1;
            };
            return outcomesReport;
        }());
        Components.outcomesReport = outcomesReport;
        app.value('googleChartApiConfig', {
            version: '1.1',
            optionalSettings: { packages: ['bar'], language: 'en' }
        });
        app.component("outcomesReport", {
            controller: outcomesReport,
            controllerAs: "vm",
            templateUrl: "app/pages/outcomes-report/outcomes-report.html?v=" + new Date(),
        });
    })(Components = Application.Components || (Application.Components = {}));
})(Application || (Application = {}));
//# sourceMappingURL=outcomes-report.js.map