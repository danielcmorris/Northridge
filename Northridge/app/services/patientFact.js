/// <reference path="../types/types.d.ts" />
var Application;
(function (Application) {
    var Services;
    (function (Services) {
        var PatientFact = (function () {
            function PatientFact($http, $log, $q) {
                this.$http = $http;
                this.$log = $log;
                this.$q = $q;
                this.$inject = ['$http', '$log'];
                this.$log.debug("Patient Factory Loaded");
            }
            PatientFact.prototype.Search = function (name) {
                var url = '/app/data/patients.json';
                return this.$http.get(url).then(function (response) {
                    return response.data;
                });
            };
            PatientFact.prototype.Outcomes = function (id) {
                var url = '/app/data/outcomes.json';
                return this.$http.get(url).then(function (response) {
                    return response.data;
                });
            };
            return PatientFact;
        }());
        app.service("patientFact", PatientFact);
    })(Services = Application.Services || (Application.Services = {}));
})(Application || (Application = {}));
//# sourceMappingURL=patientFact.js.map