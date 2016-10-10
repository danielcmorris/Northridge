/// <reference path="../../types/types.d.ts" />
/// <reference path="../../models/outcome.ts" />
 
module Application.GoogleChartOptions {

    export class Column {

        public id: string;
        public label: string;
        public type: string;
        constructor(id: string = '',
                    label?: string = '', type) {
            this.id = id;
            this.label = label;
            this.type = type;
        }


    }
}
module Application.Components {
    
    
    interface IRouteParamsService extends ng.route.IRouteParamsService {
        id: string;
    }

     
    public class outcome  {
        public title: string;
        public admittance: number;
        public discharge: number;
        public goal: number;

        constructor(title?: string = '', admittance?: number = 0, goal?: number = 0, discharge?: number = 0) {
            
            this.title = title;
            this.admittance = admittance;
            this.goal = goal;
            this.discharge = discharge;
        }
        GetChartRows() {
            let c1: any = [];
            c1.push({ v: this.title });
            c1.push({ v: this.admittance });
            c1.push({ v: this.goal });
            c1.push({ v: this.discharge, f: 'test' });

            return c1
        }
    }
    public class patient {
        id: number;
        firstName: string;
        lastName: string;
        admissionDate: Date;
        dischargeDate: Date;
        referringHospital: string;
        dischargeOutComeGoal: string;
        dischargeOutcome: string;
        paymentSources: string;
        primaryMd: string;
        primaryImpairment: string;
        preparedToManageAtAdmission: string;
        preparedToManageAdDischarge: string;
        measurements: outcome[];
    }

    export class outcomesReport {
       
        public mydocs: any = [];
        public api: any = {};
        public searchText: string;
        public assistance: any;
        public ambulation: any;
        public patient: patient
        public myChart: any;
        public mobilityProfile: any;
        $insert = ['$location', '$http', '$timeout','patientFact','$routeParam'];
        constructor(private $location, private $http, private $timeout,
            private patientFact: Application.Services.IPatientFact,
            private $routeParams: ng.route.IRouteParamsService) {



        }

        $onInit() {

            let pat = new patient();
            pat.id = 1;
            pat.firstName = "Daniel";
            pat.lastName = "Morris";
            pat.admissionDate = new Date("1/2/16");
            pat.dischargeDate = new Date("1/2/16");
            pat.referringHospital = "Finnish Medical Center";
            pat.paymentSources = "M-care";
            pat.primaryImpairment = "Cardiovascular disease"
            pat.primaryMd = "Dr. Christopher Rose";
            pat.preparedToManageAtAdmission = "No"
            pat.preparedToManageAdDischarge = "Yes"
            pat.dischargeOutcome = "Able to Manage";
            pat.dischargeOutComeGoal = "Able to Jog";

            let id: number = parseInt(this.$routeParams.id);
            this.patientFact.Search("some name")
                .then(resp => {
                    angular.forEach(resp, (i, k) => {
                        console.log(i)
                        if (i.id === id) {
                            this.patient.firstName = i.firstName;
                            this.patient.lastName = i.lastName;
                        }

                    });

                });


            this.patient = pat;
            let rows: any = [];
            this.patientFact.Outcomes(pat.id)
                .then(resp => {
                    angular.forEach(resp, (i:outcome, k) => {
                        rows.push({ c: new outcome(i.title, i.admission,i.goal, i.discharge).GetChartRows() })
                    
                    });

                });
             
            let names = ['Adm', 'Goal', 'DC']

            this.myChart=   this.BuildChart(pat.firstName + ' ' + pat.lastName + ' FIM Self Help Profile', names, rows)

          
            this.$timeout( ()=> { this.MakeAmbulation(this) }, 1000);
           


        }

        MakeAmbulation(self) {
            console.log("MakeAmbulation");
            let names = ['Adm', 'Goal', 'DC']
            self.ambulation = self.BuildChart("Assistance", names, [
                { c: new outcome("sTransfer Bed/Chair", 3, 6, 5).GetChartRows() },
                { c: new outcome("sTransfer Toilet", 3, 6, 5).GetChartRows() },
                { c: new outcome("sTransfer Tub/Shower", 3, 6, 5).GetChartRows() }]);
      
            self.$timeout(() => { self.MakeAssistance(self) }, 1000);
        }
        MakeAssistance(self) {
            console.log("Make Assistance")
            let names = ['Adm', 'Goal', 'DC']
            self.assistance = self.BuildChart("Assistance", names, [
                { c: new outcome("sTransfer Bed/Chair", 3, 6, 5).GetChartRows() },
                { c: new outcome("sTransfer Toilet", 3, 6, 5).GetChartRows() },
                { c: new outcome("sTransfer Tub/Shower", 3, 6, 5).GetChartRows() }]);
           
            self.$timeout(() => { self.MakeMobility(self) }, 1000);

        }
        MakeMobility(self) {
            console.log("Make Mobility")
            let names = ['Adm', 'Goal', 'DC']
            self.mobilityProfile = self.BuildChart("MP", names, [
                { c: new outcome("Transfer Bed/Chair", 3, 6, 5).GetChartRows() },
                { c: new outcome("Transfer Toilet", 3, 6, 5).GetChartRows() },
                { c: new outcome("Transfer Tub/Shower", 3, 6, 5).GetChartRows() }]);

        }

        BuildChart(titleOfReport: string, names: string[], rows: any) {
            let p: any = this.patient;
            var chart1 = <any>{};
            chart1.type = "google.charts.Bar";
            chart1.displayed = false;

            //TITLE
            let col: Application.GoogleChartOptions.Column[] = [];
            col.push(new Application.GoogleChartOptions.Column("titleOfReport", titleOfReport, "string"));

            //NUMERIC DATA LABELS        
            for (var i = 0; i < names.length; i++) {
                col.push(new Application.GoogleChartOptions.Column('id' + i, names[i], "number"));
            }

            chart1.data = { "cols": col, "rows": rows  };


          return chart1;

        }

    }
    app.value('googleChartApiConfig', {
        version: '1.1',
        optionalSettings: {
            packages: ['bar'],
            language: 'en'
        }
    );
    app.component("outcomesReport", {
        controller: outcomesReport,
        controllerAs: "vm",
        templateUrl: "app/pages/outcomes-report/outcomes-report.html?v=" + new Date(),
    })
}