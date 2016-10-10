/// <reference path="../types/types.d.ts" />



module Application.Services {


    export interface IPatientFact {
        Search(name: string): ng.IHttpPromise<any>;
        Outcomes(id: number): ng.IHttpPromise<any>;
    }
    class PatientFact {
        public title: string;
        public admittance: number;
        public discharge: number;
        public goal: number;
        $inject = ['$http', '$log']

        constructor(private $http, private $log, private $q:ng.IQService) {
            this.$log.debug("Patient Factory Loaded")
        }
        Search(name: string) {
            let url = '/app/data/patients.json';
            return this.$http.get(url).then(function (response) {

                return response.data;
            });

        }
        Outcomes(id: number) {
            let url = '/app/data/outcomes.json';
            return this.$http.get(url).then(function (response) {

                return response.data;
            });

        }
    }
    app.service("patientFact",PatientFact)
}
