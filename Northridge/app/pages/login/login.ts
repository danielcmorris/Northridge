/// <reference path="../../types/types.d.ts" />

 

module Application.Components {



    class login {
        public title: string;
        public admittance: number;
        public discharge: number;
        public goal: number;
        $insert=['$location']
        constructor(private $location:ng.ILocationService) {
            console.log("LOGIN")

        }
        Login() {
            this.$location.path("/patient-list");
        }
        
    } 
    app.component("login", {
        controller: login,
        controllerAs: "vm",
        templateUrl: "app/pages/login/login.html?v=" + new Date(),
    })
    }
