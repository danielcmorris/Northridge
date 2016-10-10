/// <reference path="../../types/types.d.ts" />
   
module Application.Components {

    interface IPatient extends Application.Types.IPatient { }


    class PatientList {
        public Patients: IPatient[];
        public SearchText: string = "";
        $insert=['patientFact','$location']
        constructor(private patientFact, private $location:ng.ILocationService) {
            console.log("LOGIN")
        }
        $onInit() {
            this.patientFact.Search('test')
                .then(resp => {
                    this.Patients = resp;
                    
                });
        }
        Logout() {
            this.$location.path("/");
        }
        OutcomeReport(p) {
            //  this.$location.path('/patient-list/' + this.Patient.id + '/outcomes-report');
            let options = `fullscreen=yes,toolbar=no,location=no,
                            directories=no,status = no,
                            menubar = no, scrollbars = no, resizable = no'`;
            let id = "OutcomesReport"
            let w = window.open('/#/patient-list/' + p.id + '/outcomes-report', id, options);
            w.focus();
        }

    }
    app.component("patientList", {
        controller: PatientList,
        controllerAs: "vm",
        templateUrl: "app/pages/patient-list/patient-list.html",
    })
}
