/// <reference path="../../types/types.d.ts" />
   
module Application.Components {

    interface IPatient extends Application.Types.IPatient { }
    interface IRouteParamsService extends ng.route.IRouteParamsService {
        id: string;
    }

    class Patient {
        public Patient: IPatient = <IPatient>{};
        public Outcomes: Application.Types.IOutcome[];
        public SearchText: string = "";
        $insert=['patientFact','$routeParams','$location']
        constructor(private patientFact, private $routeParams: IRouteParamsService, private $location:ng.ILocationService) {
           

        }

        $onInit() {
            console.log("Patient " + this.$routeParams.id)
            let id: number = parseInt(this.$routeParams.id);
            this.patientFact.Search(1)
                .then(resp => {
                    angular.forEach(resp, (i, k) => {
                        console.log(i)
                        if (i.id === id) {
                            this.Patient = i;
                            this.Outcomes = this.Patient.outcomes;
                        }
                    
                    });

                });
            //this.patientFact.Outcomes(1)
            //    .then(resp => {
            //        this.Outcomes = resp;
                    
            //    });
        }
        OutcomeReport() {
          //  this.$location.path('/patient-list/' + this.Patient.id + '/outcomes-report');
            let options = 'fullscreen=yes,toolbar=no,location=no,directories=no,status = no, menubar = no, scrollbars = no, resizable = no';
            let id = "OutcomesReport"
            let w = window.open('/#/patient-list/' + this.Patient.id + '/outcomes-report', id, options);
            w.focus();
        }
    }
    app.component("patient", {
        controller: Patient,
        controllerAs: "vm",
        templateUrl: "app/pages/patient/patient.html",
    })
}
