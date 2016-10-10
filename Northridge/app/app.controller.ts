

module Application.Controllers {
    export class MainCtrl {
        public Title: string;
        $insert = ['$route', '$routeParams', '$location'];
        constructor(private $route, private $routeParams, private $location) {
            //console.log(this.$routeParams);
            var v = new Application.Config.version()
            console.log(v)
            this.Title = "Center at Northridge Outcomes Database";

        }
    }


    app.controller("MainCtrl", MainCtrl);


}

