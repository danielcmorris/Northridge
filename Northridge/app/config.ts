/// <reference path="types/types.d.ts" />

module Application.Config {
    export class Session {
       public sessionId: string = "NONE";
    }
    export class version {
        public number: string;
        public author: string = "Morris Development";
        public supportContact: string = "dmorris@morrisdev.com";
        public apiKey: string = "dswejkdfkui8yoihkjnlj98776tsad87sd9809fdijsnekjjdsoidjs";
        
        constructor() {
            this.number = "1.0" + Math.random();
        }
    }
    export class routes {
        $insert = ['$routeProvider', '$locationProvider']
        constructor(private $routeProvider, private $locationProvider) {
            this.$routeProvider
                .when('/', {
                    template: '<login></login>'
                })
                .when('/outcomes-report/:id', {
                    template: '<outcomes-report></outcomes-report>'
                })
                .when('/login', {
                    template: '<login></login>'
                }).when('/patient-list', {
                    template: '<patient-list></patient-list>'
                })
                .when('/patient', {
                    template: '<patient></patient>'
                })
                .when('/patient-list/:id', {
                    template: '<patient></patient>'
                })
                .when('/patient-list/:id/outcomes-report', {
                    template: '<outcomes-report></outcomes-report>'
                })
            
                .otherwise({ redirectTo: '/login' });;

            this.$locationProvider.html5Mode(false);
        }
    }
    app.config(routes);

    export class httpConfig {
        $insert = ["$httpProvider"]
        constructor(private $httpProvider: ng.IHttpProvider) {

            this.$httpProvider.defaults.useXDomain = true;
            this.$httpProvider.defaults.withCredentials = false;
            delete this.$httpProvider.defaults.headers.common["X-Requested-With"];
            //this.$httpProvider.defaults.headers.common["Accept"] = "application/json";
            //  this.$httpProvider.defaults.headers.common["Content-Type"] = "application/json";
        }
    }
    app.config(httpConfig)


    export class templates {

        /* PAGES */
        public index: string = "app/pages/index/index.html";
        public login: string = "app/pages/login/login.html";
        public outcomesReport: string = "app/pages/outcomes-report/outcomes-report.html";
         
        



        constructor() {
            let v = new version()
            this.login += "?v=" + v.number;
            
        }
    }
    app.service("templates", templates)


}