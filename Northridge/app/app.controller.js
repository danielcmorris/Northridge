var Application;
(function (Application) {
    var Controllers;
    (function (Controllers) {
        var MainCtrl = (function () {
            function MainCtrl($route, $routeParams, $location) {
                this.$route = $route;
                this.$routeParams = $routeParams;
                this.$location = $location;
                this.$insert = ['$route', '$routeParams', '$location'];
                //console.log(this.$routeParams);
                var v = new Application.Config.version();
                console.log(v);
                this.Title = "Center at Northridge Outcomes Database";
            }
            return MainCtrl;
        }());
        Controllers.MainCtrl = MainCtrl;
        app.controller("MainCtrl", MainCtrl);
    })(Controllers = Application.Controllers || (Application.Controllers = {}));
})(Application || (Application = {}));
//# sourceMappingURL=app.controller.js.map